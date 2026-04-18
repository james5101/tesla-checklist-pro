import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CATEGORIES, ITEMS, TOTAL_ITEMS } from '../data/checklist';

export type Status = 'pass' | 'flag' | 'skip';

interface ExportArgs {
  vin: string;
  modelLabel: string;
  statuses: Record<string, Status>;
  notes?: Record<string, string>;
}

type RGB = [number, number, number];

const hexToRgb = (hex: string): RGB => {
  const h = hex.trim().replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
};

const readVar = (name: string, fallback: RGB): RGB => {
  if (typeof window === 'undefined') return fallback;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  if (!raw) return fallback;
  if (raw.startsWith('#')) return hexToRgb(raw);
  const m = raw.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(',').map((s) => parseFloat(s.trim()));
    return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
  }
  return fallback;
};

const mixWithWhite = ([r, g, b]: RGB, amount: number): RGB => [
  Math.round(r + (255 - r) * (1 - amount)),
  Math.round(g + (255 - g) * (1 - amount)),
  Math.round(b + (255 - b) * (1 - amount)),
];

const STATUS_LABEL: Record<Status, string> = {
  pass: 'PASS',
  flag: 'FLAG',
  skip: 'SKIP',
};

const pad2 = (n: number) => n.toString().padStart(2, '0');

const timestamp = (d: Date) =>
  `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ${pad2(
    d.getHours()
  )}:${pad2(d.getMinutes())}`;

const filenameStamp = (d: Date) =>
  `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}-${pad2(
    d.getHours()
  )}${pad2(d.getMinutes())}`;

export function exportInspectionPdf({ vin, modelLabel, statuses, notes = {} }: ExportArgs) {
  const ACCENT = readVar('--accent', [255, 45, 45]);
  const DANGER = readVar('--danger', [255, 45, 45]);
  const INK_0: RGB = [10, 11, 13];
  const INK_1: RGB = [110, 116, 128];
  const OK = readVar('--ok', [0, 140, 95]);
  const SKIP: RGB = [110, 116, 128];
  const FLAG_TINT = mixWithWhite(DANGER, 0.08);

  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const now = new Date();
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 40;

  const entries = Object.entries(statuses) as [string, Status][];
  const passCount = entries.filter(([, s]) => s === 'pass').length;
  const flagCount = entries.filter(([, s]) => s === 'flag').length;
  const skipCount = entries.filter(([, s]) => s === 'skip').length;
  const doneCount = passCount + skipCount + flagCount;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...INK_0);
  doc.text('TeslaChecklist', margin, 56);
  const brandW = doc.getTextWidth('TeslaChecklist');
  doc.setTextColor(...ACCENT);
  doc.text('Pro', margin + brandW, 56);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...INK_1);
  doc.text('DELIVERY INSPECTION REPORT', pageW - margin, 44, { align: 'right' });
  doc.text(timestamp(now), pageW - margin, 58, { align: 'right' });

  // Divider
  doc.setDrawColor(220, 222, 226);
  doc.setLineWidth(0.5);
  doc.line(margin, 72, pageW - margin, 72);

  // Meta block
  doc.setFontSize(8);
  doc.setTextColor(...INK_1);
  doc.text('VIN', margin, 92);
  doc.text('MODEL', margin + 180, 92);
  doc.text('PROGRESS', margin + 340, 92);
  doc.text('FLAGGED', margin + 450, 92);

  doc.setFontSize(11);
  doc.setTextColor(...INK_0);
  doc.setFont('courier', 'normal');
  if (vin) {
    doc.text(vin, margin, 108);
  } else {
    doc.setTextColor(...INK_1);
    doc.text('— not provided —', margin, 108);
    doc.setTextColor(...INK_0);
  }
  doc.setFont('helvetica', 'normal');
  doc.text(modelLabel, margin + 180, 108);
  doc.setFont('courier', 'normal');
  doc.text(`${doneCount} / ${TOTAL_ITEMS}`, margin + 340, 108);
  doc.setTextColor(...(flagCount > 0 ? DANGER : INK_0));
  doc.text(String(flagCount), margin + 450, 108);

  // Summary strip
  doc.setDrawColor(220, 222, 226);
  doc.line(margin, 124, pageW - margin, 124);

  // Per-category tables
  let cursorY = 148;

  for (const cat of CATEGORIES) {
    const rows: any[] = [];
    for (const item of ITEMS[cat.id] || []) {
      const s = statuses[item.id];
      rows.push([item.id, item.title, item.spec, s ? STATUS_LABEL[s] : '—']);
      const note = notes[item.id];
      if (s === 'flag' && note && note.trim()) {
        rows.push([
          { content: '' },
          {
            content: `Note: ${note.trim()}`,
            colSpan: 3,
            styles: {
              fillColor: FLAG_TINT,
              textColor: INK_0,
              fontSize: 9,
              fontStyle: 'italic',
              cellPadding: { top: 4, right: 8, bottom: 6, left: 8 },
            },
          },
        ]);
      }
    }

    const catFlagged = (ITEMS[cat.id] || []).filter(
      (i) => statuses[i.id] === 'flag'
    ).length;
    const catDone = (ITEMS[cat.id] || []).filter(
      (i) => statuses[i.id] === 'pass' || statuses[i.id] === 'skip'
    ).length;

    autoTable(doc, {
      startY: cursorY,
      head: [
        [
          {
            content: `${cat.label.toUpperCase()}  ·  ${catDone}/${cat.count} complete  ·  ${catFlagged} flagged`,
            colSpan: 4,
            styles: {
              fillColor: [10, 11, 13],
              textColor: 245,
              fontStyle: 'bold',
              fontSize: 9,
              halign: 'left',
              cellPadding: { top: 6, right: 10, bottom: 6, left: 10 },
            },
          },
        ],
        [
          { content: 'ID', styles: { fontStyle: 'bold', fontSize: 8 } },
          { content: 'Item', styles: { fontStyle: 'bold', fontSize: 8 } },
          { content: 'Spec', styles: { fontStyle: 'bold', fontSize: 8 } },
          {
            content: 'Status',
            styles: { fontStyle: 'bold', fontSize: 8, halign: 'center' },
          },
        ],
      ],
      body:
        rows.length > 0
          ? rows
          : [
              [
                {
                  content: 'No items inspected in this category.',
                  colSpan: 4,
                  styles: { fontStyle: 'italic', textColor: INK_1 },
                },
              ],
            ],
      theme: 'grid',
      margin: { left: margin, right: margin },
      styles: {
        font: 'helvetica',
        fontSize: 9,
        textColor: INK_0,
        lineColor: [220, 222, 226],
        lineWidth: 0.5,
        cellPadding: { top: 5, right: 8, bottom: 5, left: 8 },
        overflow: 'linebreak',
      },
      columnStyles: {
        0: { cellWidth: 58, font: 'courier', fontSize: 8, textColor: INK_1 },
        1: { cellWidth: 160 },
        2: { cellWidth: 'auto', textColor: INK_1, fontSize: 9 },
        3: { cellWidth: 50, halign: 'center', fontStyle: 'bold' },
      },
      didParseCell: (data) => {
        if (data.section !== 'body') return;
        if (data.column.index !== 3) return;
        const raw = data.cell.raw;
        const status = typeof raw === 'string' ? raw : '';
        if (status === 'PASS') data.cell.styles.textColor = OK;
        else if (status === 'FLAG') {
          data.cell.styles.textColor = DANGER;
          data.row.cells[0].styles.fillColor = FLAG_TINT;
          data.row.cells[1].styles.fillColor = FLAG_TINT;
          data.row.cells[2].styles.fillColor = FLAG_TINT;
          data.row.cells[3].styles.fillColor = FLAG_TINT;
        } else if (status === 'SKIP') data.cell.styles.textColor = SKIP;
        else data.cell.styles.textColor = [200, 204, 210];
      },
    });

    cursorY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 20;
  }

  // Footer on every page
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageH = doc.internal.pageSize.getHeight();
    doc.setFontSize(8);
    doc.setTextColor(...INK_1);
    doc.setFont('courier', 'normal');
    doc.text(
      `TESLACHECKLISTPRO · REPORT ${filenameStamp(now)} · NOT AFFILIATED WITH TESLA, INC.`,
      margin,
      pageH - 24
    );
    doc.text(`PAGE ${i} / ${pageCount}`, pageW - margin, pageH - 24, {
      align: 'right',
    });
  }

  doc.save(`tesla-inspection-${filenameStamp(now)}.pdf`);
}

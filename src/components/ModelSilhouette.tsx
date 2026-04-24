import modelSRaw from '../assets/silhouettes/model-s.svg?raw';
import model3Raw from '../assets/silhouettes/model-3.svg?raw';
import modelXRaw from '../assets/silhouettes/model-x.svg?raw';
import modelYRaw from '../assets/silhouettes/model-y.svg?raw';
import cybertruckRaw from '../assets/silhouettes/cybertruck.svg?raw';

type ModelId = 'model-s' | 'model-3' | 'model-x' | 'model-y' | 'cybertruck';

// Normalize raw SVG text so it renders cleanly inline:
// - strip XML prolog and comments (browsers don't need them once inlined)
// - strip width/height so the SVG scales to its container via viewBox
// - force fill="currentColor" so the dual-theme color tokens flow through
//   (original source has no explicit fill, defaulting to #000 in dark theme)
function prepare(raw: string): string {
  return raw
    .replace(/<\?xml[^?]*\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<svg\b([^>]*)>/i, (_m, attrs: string) => {
      const cleaned = attrs
        .replace(/\s(width|height)="[^"]*"/gi, '')
        .replace(/\sfill="[^"]*"/gi, '');
      return `<svg${cleaned} fill="currentColor">`;
    })
    .trim();
}

const MAP: Record<ModelId, string> = {
  'model-s': prepare(modelSRaw),
  'model-3': prepare(model3Raw),
  'model-x': prepare(modelXRaw),
  'model-y': prepare(modelYRaw),
  cybertruck: prepare(cybertruckRaw),
};

export function ModelSilhouette({ id }: { id: string }) {
  const svg = MAP[id as ModelId];
  if (!svg) return null;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'inherit',
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

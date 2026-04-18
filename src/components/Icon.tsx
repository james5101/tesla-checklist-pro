import { CSSProperties, ReactNode } from 'react';

export const Icon = ({
  children,
  size = 14,
  style,
}: {
  children: ReactNode;
  size?: number;
  style?: CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    {children}
  </svg>
);

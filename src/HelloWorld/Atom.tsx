import { useState } from "react";
import { random, useVideoConfig } from "remotion";

export const Atom: React.FC<{
  scale: number;
  color1: string;
  color2: string;
}> = ({ scale, color1, color2 }) => {
  const config = useVideoConfig();

  // Each SVG ID must be unique to not conflict with each other
  const [gradientId] = useState(() => String(random(null)));

  return (
    <svg
      width="400px"
      height="400px"
      viewBox="0 0 400 400"
      style={{
        position: "absolute",
        transform: `scale(${scale})`,
        top: `${(config.height - 400) / 2}px`,
        left: `${(config.width - 400) / 2}px`,
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        fontFamily="Menlo-Bold, Menlo"
        fontSize="100"
        fontWeight="bold"
      >
        <text>
          <tspan x="19" y="235" fill={`url(#${gradientId})`}>n</tspan>
          <tspan x="79.2" y="235" fill={`url(#${gradientId})`}>0</tspan>
          <tspan x="139.4" y="235" fill={`url(#${gradientId})`}>c</tspan>
          <tspan x="199.6" y="235" fill={`url(#${gradientId})`}>0</tspan>
          <tspan x="259.8" y="235" fill={`url(#${gradientId})`}>de</tspan>
        </text>
      </g>
    </svg>
  );
};
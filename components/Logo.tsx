import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ElektroProff logotyp"
      role="img"
    >
      {/* Shield background */}
      <path
        d="M20 2L4 8v12c0 9.6 7.2 16.8 16 18 8.8-1.2 16-8.4 16-18V8L20 2z"
        fill="#1a3a5c"
      />
      {/* Lightning bolt */}
      <path
        d="M23 8l-8 12h7l-2 12 9-14h-7l1-10z"
        fill="#f59e0b"
        stroke="#f59e0b"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

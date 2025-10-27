"use client";

interface SuvarthaLogoSimpleProps {
  size?: number;
  variant?: 'light' | 'dark' | 'color';
  className?: string;
}

export default function SuvarthaLogoSimple({ 
  size = 32, 
  variant = 'color',
  className = '' 
}: SuvarthaLogoSimpleProps) {
  const getColors = () => {
    switch (variant) {
      case 'light':
        return {
          primary: '#ffffff',
          accent: '#f3f4f6',
          secondary: '#e5e7eb'
        };
      case 'dark':
        return {
          primary: '#1f2937',
          accent: '#374151',
          secondary: '#4b5563'
        };
      default: // color
        return {
          primary: '#065f46',
          accent: '#10b981',
          secondary: '#047857'
        };
    }
  };

  const colors = getColors();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle */}
      <circle cx="16" cy="16" r="15" fill={colors.primary}/>
      
      {/* Cross Symbol */}
      <g transform="translate(16,16)">
        {/* Vertical bar of cross */}
        <rect x="-1" y="-8" width="2" height="16" fill={colors.accent} rx="1"/>
        {/* Horizontal bar of cross */}
        <rect x="-6" y="-1" width="12" height="2" fill={colors.accent} rx="1"/>
      </g>
      
      {/* Decorative Elements - Rays */}
      <g transform="translate(16,16)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <g key={index} transform={`rotate(${angle})`}>
            <rect
              x="-0.25"
              y="-12"
              width="0.5"
              height="2"
              fill={colors.secondary}
              rx="0.25"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
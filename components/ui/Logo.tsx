import React from 'react';

interface LogoProps {
    className?: string;
    size?: number;
}

const Logo: React.FC<LogoProps> = ({ className, size = 32 }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
            >
                <defs>
                    <linearGradient id="logo-blue-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#4FD1C5" />
                        <stop offset="100%" stopColor="#3182CE" />
                    </linearGradient>
                    <linearGradient id="logo-green-grad" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#68D391" />
                        <stop offset="100%" stopColor="#38A169" />
                    </linearGradient>
                </defs>

                {/* The "Heart-Leaf" Outer Shell */}
                <path
                    d="M50 95C50 95 95 70 95 40C95 20 75 5 50 25C25 5 5 20 5 40C5 70 50 95 50 95Z"
                    fill="white"
                    stroke="url(#logo-blue-grad)"
                    strokeWidth="6"
                    strokeLinejoin="round"
                />

                {/* Side Leaves with Tech Accents */}
                <path
                    d="M25 45C25 45 15 65 35 80C40 82 48 83 48 83"
                    fill="url(#logo-green-grad)"
                    stroke="#2F855A"
                    strokeWidth="1"
                />
                <path
                    d="M75 45C75 45 85 65 65 80C60 82 52 83 52 83"
                    fill="url(#logo-green-grad)"
                    stroke="#2F855A"
                    strokeWidth="1"
                />

                {/* The Central Microphone */}
                <rect x="42" y="30" width="16" height="35" rx="8" fill="url(#logo-green-grad)" stroke="#2F855A" strokeWidth="1" />

                {/* Microphone Circuitry - Simplified */}
                <path d="M45 40H55M45 45H55M45 50H55" stroke="white" strokeWidth="0.5" opacity="0.6" />
                <circle cx="50" cy="40" r="1" fill="white" opacity="0.8" />
                <circle cx="50" cy="45" r="1" fill="white" opacity="0.8" />
                <circle cx="50" cy="50" r="1" fill="white" opacity="0.8" />

                {/* Mic Base */}
                <rect x="47" y="65" width="6" height="10" fill="#38A169" />
                <rect x="38" y="75" width="24" height="4" rx="2" fill="#38A169" />
            </svg>
        </div>
    );
};

export default Logo;

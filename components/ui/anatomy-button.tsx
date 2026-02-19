import React from 'react';

interface AnatomyButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export const AnatomyButton: React.FC<AnatomyButtonProps> = ({ onClick, children, className, disabled }) => {
    return (
        <button
            className={`anatomy-button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <div className="icon">
                <span className="text-icon hide">Icon</span>
                <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth={2}
                    stroke="currentColor"
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
            </div>
            <span className="title">{children}</span>
            <div className="padding-left hide">
                <div className="padding-left-line">
                    <span className="padding-left-text">Left Padding</span>
                </div>
            </div>
            <div className="padding-right hide">
                <div className="padding-right-line">
                    <span className="padding-right-text">Right Padding</span>
                </div>
            </div>
            <div className="background hide">
                <span className="background-text">Background</span>
            </div>
            <div className="border hide">
                <span className="border-text">Border Radius</span>
            </div>
        </button>
    );
};

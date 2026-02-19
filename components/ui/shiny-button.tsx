import React from 'react';

interface ShinyButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ onClick, children, className }) => {
    return (
        <button className={`cssbuttonsIoButton ${className}`} onClick={onClick}>
            {children}
            <div className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                </svg>
            </div>
        </button>
    );
};

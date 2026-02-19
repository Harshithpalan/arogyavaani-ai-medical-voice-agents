"use client";
import * as React from 'react';
import Link from 'next/link';

interface BubbleButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const BubbleButton = ({ href, children, className }: BubbleButtonProps) => {
  return (
    <Link
      href={href}
      className={`
        relative px-6 py-2.5 rounded-xl border-none text-white cursor-pointer 
        bg-[var(--primary,#0077ff)] transition-all duration-200 font-bold text-[15px]
        flex items-center justify-center whitespace-nowrap active:scale-95
        hover:shadow-lg hover:shadow-primary/20
        group
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

export default BubbleButton;

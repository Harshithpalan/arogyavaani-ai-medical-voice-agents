"use client"
import * as React from 'react';
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import BubbleButton from '@/components/ui/BubbleButton';

const menuOptions = [
    {
        id: 1,
        name: 'Home',
        path: '/dashboard'
    },
    {
        id: 2,
        name: 'History',
        path: '/dashboard/history'
    },
    {
        id: 3,
        name: 'Pricing',
        path: '/pricing'
    },
    {
        id: 4,
        name: 'Profile',
        path: '/profile'
    }
]

function AppHeader() {
    const pathname = usePathname();

    // Check if we are on pricing or profile pages
    const isSpecialPage = pathname === '/pricing' || pathname === '/profile';

    // Filter out Home, History, and Pricing if on special pages
    const filteredOptions = isSpecialPage
        ? menuOptions.filter(option => option.name === 'Profile')
        : menuOptions;

    return (
        <header className='sticky top-0 z-[60] w-full glass border-b transition-all duration-300'>
            <div className='flex items-center justify-between px-10 md:px-20 lg:px-40 h-20'>
                <Link href="/" className="flex items-center gap-2 group transition-all">
                    <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Logo size={40} />
                    </div>
                    <h1 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                        Arogya<span className="text-primary font-extrabold">Vaani</span>
                    </h1>
                </Link>

                <nav className='hidden md:flex gap-4 items-center'>
                    {filteredOptions.map((option, index) => (
                        <BubbleButton key={index} href={option.path}>
                            {option.name}
                        </BubbleButton>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: "h-12 w-12"
                            }
                        }}
                    />
                </div>
            </div>
        </header>
    )
}

export default AppHeader

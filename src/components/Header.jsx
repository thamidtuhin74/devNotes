"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
    const path = usePathname();
    console.log(path);
    if(path.startsWith("/dashboard")) return <></>
    return (
        <header className="border-b-0 border-gray flex justify-between px-22 py-5 pt-6">
            <Link className="text-lg font-semibold" href="/">🤑 Dev Story</Link>
            <nav className='space-x-5'>
                <Link href="/about">About</Link>
                <Link href="/tutorials">Tutorials</Link>
                <Link href="/guide">Guide</Link>
                <Link href="/about">About</Link>
                <Link href="/about/contact">Contact</Link>
                <Link href="/about/team">Teams</Link>
                <Link href="/dashboard/add-story" className='btn rounded-full bg-amber-300 py-5 px-12'>Create Story</Link>
            </nav>
        </header>
    );
};

export default Header;
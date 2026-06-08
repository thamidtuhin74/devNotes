"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    const path = usePathname();
    console.log(path);
    if(path.startsWith("/dashboard")) return <></>
    return (
        <header className="border-b-0 border-gray flex justify-between px-22 py-5 pt-6">
            <Link className="text-lg font-semibold" href="/">🤑 Dev Story</Link>
            <nav className='space-x-5'>
                <NavLink href="/stories">Story</NavLink>
                <NavLink href="/tutorials">Tutorials</NavLink>
                <NavLink href="/guide">Guide</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/about/contact">Contact</NavLink>
                <NavLink href="/about/team">Teams</NavLink>
                <NavLink href="/dashboard/add-story" className='btn rounded-full bg-amber-300 py-5 px-12'>Create Story</NavLink>
            </nav>
        </header>
    );
};

export default Header;
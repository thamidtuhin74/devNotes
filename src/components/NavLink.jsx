import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${pathname.startsWith(href) && "bg-blue-600 py-2 px-3 rounded-2xl text-amber-50"}`}>
            {children}
        </Link>
    );
};

export default NavLink;
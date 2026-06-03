import PageTitle from '@/components/PageTitle';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <PageTitle>Welcome to About Page</PageTitle>
            <nav className='space-x-5 px-22 py-5'>
                <Link href={"/about/team"}>Team</Link>
                <Link href={"/about/contact"}>Contact</Link>
            </nav>
        </div>
    );
};

export default About;
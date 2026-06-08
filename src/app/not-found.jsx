import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-black gap-2'>
            <h2 className=' text-center text-4xl text-white'>404 | Your Requested Page not Found</h2>
            <Link href={"/"} className="underline text-amber-500"> ◀ Back to Home</Link>
        </div>
    );
};

export default NotFound404;
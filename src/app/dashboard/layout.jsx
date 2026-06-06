import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 min-h-screen mx-20'>
            <div className='col-span-2 border-r-1 border-amber-100'>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-bold text-xl'>Navigation</h3>
                    <Link href="/dashboard/add-story" className='px-4 py-2 bg-amber-100 text-black  rounded-xl shadow hover:shadow-amber-500'>Add Story</Link>
                    <Link href="/dashboard/my-profile" className='px-4 py-2 bg-amber-100 text-black  rounded-xl shadow hover:shadow-amber-500'>My Profile</Link>
                    <Link href="/dashboard/settings" className='px-4 py-2 bg-amber-100 text-black  rounded-xl shadow hover:shadow-amber-500'>Settings</Link>
                </div>
            </div>
            <div className='col-span-10'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
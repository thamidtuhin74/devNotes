import PageTitle from '@/components/PageTitle';
import Link from 'next/link';
import React from 'react';

const Guide = async ({params}) => {
    const {slug} =  await params;
    console.log(slug);
    const [technology, topic, , page_no, subject] = slug || [];
    return (
        <div>
            <PageTitle>
                <div className='space-y-2'>
                    <h2>Welcome to {technology ||"Guide"}  Page</h2>
                    <p className='text-[24px] font-medium text-center italic'>{topic} | {page_no} | <Link href="#">{subject}</Link></p>
                </div>
            </PageTitle>
        </div>
    );
};

export default Guide;
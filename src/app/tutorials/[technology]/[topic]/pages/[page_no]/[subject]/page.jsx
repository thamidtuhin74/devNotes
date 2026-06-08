import PageTitle from '@/components/PageTitle';
import React from 'react';

const SingleTutorialPage = async ({params}) => {
    const {technology, topic, page_no, subject} =  await params;
    // console.log(result);
    return (
        <div>
            <PageTitle>
                <div className='space-y-2'>
                    <h2>Welcome to {technology} Tutorial  Page</h2>
                    <p className='text-[24px] font-medium text-center italic'>{topic} | {page_no} | {subject}</p>
                </div>
            </PageTitle>

        </div>
    );
};

export default SingleTutorialPage;
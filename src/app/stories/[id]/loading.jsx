import React from 'react';

const loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-black gap-2'>
            <h2 className=' text-center text-4xl text-red-600'>L<span className='animate-spin '>⚽</span>ADING...</h2>
        </div>
    );
};

export default loading;
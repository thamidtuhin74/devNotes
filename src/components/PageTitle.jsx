import React from 'react';

const PageTitle = ({children}) => {
    return (
        <div className='min-h-[320px] bg-black flex items-center justify-center'>
            <h2 className="text-4xl font-bold text-amber-50">{children}</h2>
        </div>
    );
};

export default PageTitle;
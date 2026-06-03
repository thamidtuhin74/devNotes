'use client'

import { redirect, useRouter } from 'next/navigation';
import React, { use } from 'react';

const HomeBanner = () => {

    const route = useRouter();

    const btnHandler = () =>{
        const password =  prompt("Enter your Password");
        if(password == '1234'){
            // redirect("/dashboard");
            route.push("/dashboard");
        }

    }

    return (
        <div className='min-h-[320px] bg-black flex flex-col space-y-2 items-center justify-center'>
            <h2 className='text-4xl font-bold text-amber-50'>Welcome to the Dev-story</h2>
            <p className='text-amber-50'>Here you'll get all the update about the story of developer day</p>
            <button className='btn rounded-full bg-amber-300 py-4 px-10' onClick={btnHandler}>Create Story</button>
        </div>
    );
};

export default HomeBanner;
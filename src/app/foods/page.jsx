import PageTitle from '@/components/PageTitle';
import React from 'react';

const getFoods = async() =>{
    const res = await fetch(" https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data = await res.json();
    return data.foods || [];
}

const FoodsPage = async () => {
    const foods = await getFoods();
    return (
        <div>
            <PageTitle>Welcome to foods directory</PageTitle>
            <div>
                <p>Total <span>{foods.length}</span> foods Founded</p>
            </div>
        </div>
    );
};

export default FoodsPage;
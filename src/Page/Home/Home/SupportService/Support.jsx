import React from 'react';

const Support = ({data}) => {
    console.log(data)
    return (
        <div className='flex justify-between items-center shadow rounded-2xl p-5  bg-white'>
           <div className='border-r pr-20 border-dashed border-gray-400 p-2 rounded '>
            <img src={data.img} alt="" />
            </div> 
           

            <div >
                <h1 className='font-bold text-[#03373D] text-2xl my-3'>{data.title}</h1>
                <p className='text-[#606060] w-[1000px]'>{data.deprecation}</p>
            </div>
        </div>
    );
};

export default Support;
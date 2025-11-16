import React from 'react';
import casio from '../../../../assets/brands/casio.png'
import amazon from '../../../../assets/brands/amazon.png'
import moonstar from '../../../../assets/brands/moonstar.png'
import star from '../../../../assets/brands/star.png'
import startPeople from '../../../../assets/brands/start_people.png'
import randstad from '../../../../assets/brands/randstad.png'

const Sponsor = () => {
    return (
        <div className='my-20 mx-20'>
            <h1 className='text-[#03373D] text-center text-3xl my-10'>We've helped thousands of sales teams</h1>
           <div className='flex justify-between flex-wrap'>
            <img src={casio} alt="" />
            <img src={amazon} alt="" />
            <img src={moonstar} alt="" />
            <img src={star} alt="" />
            <img src={startPeople} alt="" />
            <img src={randstad} alt="" />
            </div> 
        </div>
    );
};

export default Sponsor;
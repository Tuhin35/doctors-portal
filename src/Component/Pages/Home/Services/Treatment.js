import React from 'react';
import img from '../../../../assets/images/treatment.png'
const Treatment = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-24 mx-16'>
            <div className='justify-center items-center m-auto'>
                <img className='md:w-1/2 ' src={img} alt="" />
            </div>
            <div className='m-auto'>
                <h2 className='text-4xl font-bold'>Exceptional Dental Care, <br /> on Your Terms</h2>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Possimus eveniet sed vero. Minima omnis corporis consequatur aliquam 
                    et velit, voluptatum maiores, provident porro placeat itaque 
                    voluptatem optio ipsum accusamus quae?
                    </h1>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>

            </div>
        </div>
    );
};

export default Treatment;
import React from 'react';

const Service = ({card}) => {
    const {description,name,img} = card;
    return (
        <div className="hero rounded text-center bg-base-100 grid grid-cols-1">
                <div className="hero-content flex-col ">
                    <img src={img} alt='' className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
    );
};

export default Service;
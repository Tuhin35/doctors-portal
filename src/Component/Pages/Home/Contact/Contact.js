import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import phone from '../../../../assets/icons/phone.svg'
import marker from '../../../../assets/icons/marker.svg'
const Contact = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3 text-white my-16'>
            <div className="hero rounded bg-primary">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={clock} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Opening Hours</h1>
                        <p className="py-6">Open 9.00 am to 5.00 pm</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div className="hero rounded bg-black">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={marker} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Visit Our hospital</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div className="hero  rounded bg-primary">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={phone} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">contact us nom</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
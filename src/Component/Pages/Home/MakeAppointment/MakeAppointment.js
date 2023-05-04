import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-16'
        style={{
            background:`url(${appointment})`
        }}>
            <div className="hero ">
                <div className="hero-content flex-col md:flex-row">
                    <img src={doctor} alt='' className="-mt-32 hidden md:block md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='m-auto'>
                        <h1 className="text-xl font-bold">Appointment</h1>
                        <h2 className='text-4xl text-secondary'>Make An Appointment Today</h2>
                        <p className="py-6 text-white">Provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores. cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
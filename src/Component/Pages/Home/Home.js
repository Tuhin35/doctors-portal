import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Treatment from './Services/Treatment';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonal from './Testimonial/Testimonal';
// import profile from '...' 
const Home = () => {
    return (
        <div className='mt-5'>
          <Banner></Banner>
            <Contact></Contact>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonal></Testimonal>
        </div>
    );
};

export default Home;
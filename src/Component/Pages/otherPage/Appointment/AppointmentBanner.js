import React, { useState } from 'react';
import chair from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <div className="hero ">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img src={chair} alt='' className=" md:w-1/2 rounded-lg shadow-2xl" />
          <div>
           <DayPicker
           mode='single'
           selected={selectedDate}
           onSelect={setSelectedDate}
           ></DayPicker>
           {/* <p>You Have  selected date: {format(selectedDate,'PP')}</p> */}
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;
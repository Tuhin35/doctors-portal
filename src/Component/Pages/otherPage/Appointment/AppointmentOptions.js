import React from 'react';

const AppointmentOptions = ({option, setTreatment}) => {
    const {name, slots,Price} = option
    return (
        <div className="card w-96 bg-base-100 m-10 shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title justify-center">{name}</h2>
    <p>{slots.length > 0  ? slots[0] : "Try Another Day"}</p>
    <p>{slots.length}{slots.length > 1  ? " spaces" : " space"} available </p>
    <p><small>Price: ${Price} </small></p>
    <div className="card-actions justify-center">
      {/* <button className="btn btn-primary">Appointment</button> */}
      <label
      disabled={slots.length===0}
       htmlFor="booking-modal"
       onClick={()=> setTreatment(option)}
        className="btn  text-white bg-gradient-to-r from-cyan-500 to-blue-500">Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOptions;
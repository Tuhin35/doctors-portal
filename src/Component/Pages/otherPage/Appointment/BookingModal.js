import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ treatment,setTreatment, selectedDate, refetch  }) => {
    const date = format(selectedDate, 'PP')
    const { name,slots, Price } = treatment;
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const navigate = useNavigate()
    const handleBooking = (e) =>{
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        // const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            appointmentDate: date,
            treatment:name,
            slot,
            email,
            phone,
            patientName,
            Price
        }

        fetch('https://doctors-portal-server-vl6z.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
           if(data.acknowledged){
            setTreatment(null)
            toast.success('Booking confirmed');
            navigate('/dashboard')
            refetch();
           }
           else{
            toast.error(data.message)
           }
        })

//  console.log(booking)
           
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered input-primary w-full" />
                       
                        <select name='slot' className="select select-bordered w-full">
                         {
                            slots.map((slot,i)=>   <option
                            key={i}
                            value={slot}>{slot} </option>)
                         }
                            
                        </select>
                        <input name='name' type="text"   value={user?.displayName} className="input input-bordered input-primary w-full" />
                        <input name='email' type="email" disabled value={email} className="input input-bordered input-primary w-full" />
                        <input name='phone' type="text" placeholder="Enter your Phone Number" className="input input-bordered input-primary w-full" />
                        <input name='phone' type="text" disabled value={Price} placeholder="Enter your Phone Number" className="input input-bordered input-primary w-full" />
                        <input type='submit' className='btn g-gradient-to-r from-cyan-500 to-blue-500 w-full' value='submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
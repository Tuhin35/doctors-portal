import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/UserContext';
import Loading from '../Shared/Loader/Loading';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
 
  
  const {user} = useContext(AuthContext);
    const { data: bookings =[], refetch, isLoading} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://doctors-portal-server-vl6z.vercel.app/bookings?email=${user.email}`,{
              headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
              }
            }
            )
            const data = await res.json();
            return data;
        }

        
 
    })

    refetch();
    if(isLoading){
      return <Loading></Loading> 
  }

    return (

     <div>
      <h2 className='text-2xl my-5'>My Appointment</h2>
      <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
         { bookings &&
          bookings?.map((booking,i)=> 
            <tr key={i}>
            <th>{i+1}</th>
            <td>{booking.patientName}</td>
            <td>{booking.treatment}</td>
            <td>{booking.appointmentDate}</td>
            <td>{booking.slot}</td>
            <td>{
              booking.Price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
              <button
              className='btn btn-primary btn-sm'
              >Pay</button>
              </Link>
              }
              {
                 booking.Price && booking.paid &&<span
                 className='text-green-600 text-xl'
                 >Paid</span>

              }
              
              
              </td>

          </tr>
          )}
        
          
        </tbody>
      </table>
    </div>
     </div>
    );
};

export default MyAppointment;
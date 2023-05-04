import { format } from 'date-fns';
import React, {  useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loader/Loading';

const AvailableAppointment = ({ selectedDate}) => {
    // const [appointmentOptions,setAppointmentOptions]=useState([])
    const [treatment, setTreatment] =useState(null)
    const date = format(selectedDate,'PP')
    // useQuery function use 
    // const {data:appointmentOptions = []} = useQuery({
    //     queryKey:['appointmentOptions'],
    //     queryFn:()=>   fetch('https://doctors-portal-server-beta-orpin.vercel.app/appointmentOptions')
    //     .then(res=> res.json())
    // })

    const { data: appointmentOptions= [], refetch, isLoading} = useQuery({
        queryKey:['appointmentOptions',date],
        queryFn: async()=>{
            const res = await fetch(`https://doctors-portal-server-beta-orpin.vercel.app/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }


    })
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch('https://doctors-portal-server-beta-orpin.vercel.app/appointmentOptions')
    //     .then(res=> res.json())
    //     .then(data =>setAppointmentOptions(data))
        
    // },[])
   
    return (
        <div className='mt-10'>
            <p className='text-secondary text-center font-bold '>Available Appointment on {format(selectedDate,'PP')}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option=><AppointmentOptions
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }

            </div>
                {
                    treatment &&
                    <BookingModal
                    selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch ={refetch}
                ></BookingModal>
                }
        </div>
    );
};

export default AvailableAppointment;
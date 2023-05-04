import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loader/Loading'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
  const {data:specialties = [],isLoading} = useQuery ({
    queryKey:['specialty'],
    queryFn: async ()=>{
        const res = await fetch(`https://doctors-portal-server-beta-orpin.vercel.app/appointmentSpecialty`)
        const data = await res.json();
        return data;
   
    }
  })

 
  
    const handleAddDoctor = data => {
        // console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        // console.log(image)
        
        // const url = 
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgData =>{
            // console.log('tuhin')
            // console.log(imgData)
            if(imgData.success)
            {
                const doctor ={
                    name : data.name,
                    email : data.email,
                    specialty : data.specialty,
                    image : imgData.data.url
                }
                // doctor save
                fetch('https://doctors-portal-server-beta-orpin.vercel.app/doctors',{
                    method:'POST',
                    headers:{
                        'content-type' : 'application/json',
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=> res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageDoctors')
                })
            }
        })
        .catch(err => {
            console.log(err)
        }
            )
    
    }  

    if(isLoading){
        return <Loading></Loading>
      }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl"> Add Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select
                    {...register('specialty')}
                    className="select input-bordered w-full max-w-xs">
                      
                        {
                            specialties.map(specialty=><option
                            key={specialty._id}
                            value={specialty.name}
                            >{specialty.name}</option>)
                        }
                       
                    </select>



                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddDoctors;
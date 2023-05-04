import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loader/Loading'
import ConfirmationModal from '../Shared/Delete/ConfirmationModal';
import { toast } from 'react-hot-toast';
const ManageDoctor = () => {

  const [deleteDoctor, setDeleteDoctor] = useState(null)
const closeModal=()=>{
  setDeleteDoctor(null)
}



  const { data: doctors = [], isLoading,refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('https://doctors-portal-server-beta-orpin.vercel.app/doctors', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`

          }
        });
        const data = await res.json();
        return data
      }
      catch (error) {

      }
    }
  })

  const successDelete =(doctor)=>{
    fetch(`https://doctors-portal-server-beta-orpin.vercel.app/doctors/${doctor._id}`,{
     method:'DELETE',
     headers:{
       authorization:`bearer ${localStorage.getItem('accessToken')}`
     }
    })
    .then(res => res.json())
    .then(data =>{
     if (data.deletedCount > 0) {
      

       refetch()
       toast.success(`Doctor ${doctor.name} deleted successfully`)
     }
    })
 }
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2 className="text-3xl">All Doctor : {doctors?.length} </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              doctors.map((doctor, i) => <tr key={doctor._id}>
                <th>{++i}</th>
                <td><img className='mask mask-squircle w-12 h-12' src={doctor.image} alt="" /></td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label htmlFor="confirmation-modal" onClick={()=> setDeleteDoctor(doctor)} className="btn btn-xs btn-danger">Delete</label>
                  {/* <button className='btn '>delete</button> */}
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deleteDoctor &&
        <ConfirmationModal
        key={deleteDoctor._id}
        title={`Are you want to delete`}
        message={`if you delete ${deleteDoctor.name} , it cannot be undone`  }
       successAction ={successDelete}
       modalData={deleteDoctor}
        closeModal={closeModal} 
        ></ConfirmationModal>
      }

    </div>
  );
};

export default ManageDoctor;
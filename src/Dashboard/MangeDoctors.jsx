import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfarmationModal from "../Pages/Shared/ConfarmationModal";
import Loading from "../Pages/Shared/Loading";

const MangeDoctors = () => {
  const [deleteingDoctor, setDeleteingDoctors] = useState(null);
  const closeModal =()=>{
    setDeleteingDoctors(null)
  }
  
  
  const { data: doctors, isLoading,refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`https://doctor-portal-server-nurmohammad83.vercel.app/doctors`);
      const data = await res.json();
      return data;
    },
  });
  const handelDeletingDoctor =(doctor)=>{
    fetch(`https://doctor-portal-server-nurmohammad83.vercel.app/doctors/${doctor._id}`,{
      method:'DELETE',
      headers:{
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
     if(data.deletedCount){
       refetch()
      toast.success('Delete Successfully')
     }
    })
  }
  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl">Managed Doctors : {doctors?.length}</h2>

      <div className="overflow-x-auto w-full my-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <p>No.</p>
                </label>
              </th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{doctor.name}</div>
                  </div>
                </td>
                <td>{doctor.specialty}</td>
                <th>
                  <label onClick={() =>setDeleteingDoctors(doctor)} htmlFor="confarmation-modal" className="btn btn-ghost bg-red-600 btn-sm"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteingDoctor && <ConfarmationModal 
      title='Are You Sure you want to delete.?'
      message={`If You delete ${deleteingDoctor.name}. It cannot be undone`}
      successAction={handelDeletingDoctor}
      modalData={deleteingDoctor}
      closeModal={closeModal}
      />}
    </div>
  );
};

export default MangeDoctors;

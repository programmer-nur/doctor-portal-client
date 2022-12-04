import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../Pages/Shared/Loading";

const AddDoctor = () => {
  const navigate = useNavigate()
    const {data:specialties,isLoading}=useQuery({
        queryKey:['specialty'],
        queryFn:async ()=>{
            const res = await fetch(`https://doctor-portal-server-nurmohammad83.vercel.app/appointmentSpecialty`)
            const data = res.json()
            return data;
        }
    })
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  if(isLoading){
    return <Loading/>
  }
  // const imgHostKey =process.env.REACT_APP_IMGBB_API
  const handelAddDoctor = (data) => {
    const image = data.img[0]
    console.log(image);
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=226a328101beecc1e23ca13cbb98984c`
    fetch(url,{
        method:'POST',
        body:formData
    })
    .then(res=>res.json())
    .then(imgData=>{
      console.log(imgData.data)
     
        if(imgData.success){
         const  doctor={
              name:data.name,
              email:data.email,
              specialty:data.specialty,
              image:imgData.data.url
          }
          fetch(`https://doctor-portal-server-nurmohammad83.vercel.app/doctors`,{
            method:'POST',
            headers:{
              'content-type':'application/json',
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(doctor)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.acknowledged){
              toast.success(`${data.name} is added successfully`)
              navigate('/dashboard/managedoctors')
            }
          })
        }
    })
  };


  return (
    <div className="w-96 p-7">
      <h2 className="text-5xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handelAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is a requierd" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-400 py-2" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", { required: "Email Address is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-400 py-2" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register('specialty')}
          className="select input-bordered my-2 w-full max-w-xs">
            <option disabled hidden selected>
              Select a Specialty?
            </option>
            {
                specialties?.map(specialty=><option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
            }
            
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", { required: "Photo is a requierd" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && (
            <p className="text-red-400 py-2" role="alert">
              {errors.img?.message}
            </p>
          )}
        </div>
        <input
          className="btn py-4 btn-accent w-full"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;

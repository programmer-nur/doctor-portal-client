import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../Shared/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvialbleAppointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    console.log(date);
    const { data: appointmentOptions = [],refetch,isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5'>
        {
            appointmentOptions.map(appointmentOption=><AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
            />)
        }
            </div>
            {treatment&&
                <BookingModal
            selectedDate={selectedDate}
            treatment={treatment}
            refetch={refetch}
            setTreatment={setTreatment}
            />
            }
        </div>
    );
};

export default AvialbleAppointment;
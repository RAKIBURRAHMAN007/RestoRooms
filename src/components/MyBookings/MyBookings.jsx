import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyBookingTable from '../MyBookingTable/MyBookingTable';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookedRooms, setBookedRooms] = useState([]);

    const axiosSecure = UseAxiosSecure();
    useEffect(() => {
        // fetch(`https://resto-rooms-server.vercel.app/bookedRooms?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setBookedRooms(data));

        // axios.get(`https://resto-rooms-server.vercel.app/bookedRooms?email=${user.email}`,{withCredentials: true})
        // .then(res=>setBookedRooms(res.data))

        axiosSecure.get(`bookedRooms?email=${user.email}`)
            .then(res => setBookedRooms(res.data))


    }, [user.email]);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-[#d3a955] text-xl md:text-5xl pt-12'>
                Booked Rooms Overview
            </h1>
            <p className='text-center text-white mt-4 mb-6'>
                Your personal space at a glance – manage all your bookings.
            </p>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Bookings| RestoRooms</title>
            </Helmet>
            <div className="overflow-x-auto mt-20 text-white">
                <table className="table">
                    {/* Table Header */}
                    <thead >
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className='text-white'>Name</th>
                            <th className='text-white'>Type</th>
                            <th className='text-white'>Price</th>
                            <th className='text-white'>Booking Date</th>

                        </tr>
                    </thead>
                    <tbody >
                        {bookedRooms.map(bookedRoom => (
                            <MyBookingTable
                                key={bookedRoom._id}
                                bookedRoom={bookedRoom}
                                setBookedRooms={setBookedRooms}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;

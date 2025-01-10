import React, { useEffect, useState } from 'react';
import TopRatedRoomCards from './TopRatedRoomCards';
import { Link } from 'react-router-dom';

const TopRatedRooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('https://resto-rooms-server.vercel.app/SortedRooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data);

            })
    }, [])
    return (
        <div className='w-11/12 mx-auto mt-20 mb-10'>
            <h1 className='text-center font-bold text-[#d3a955] text-xl md:text-5xl pt-12'>
                Unwind in Our  Best <br /> Rooms
            </h1>

            <div className='mt-16 flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    {rooms.map((room) => (
                        <TopRatedRoomCards room={room}></TopRatedRoomCards>
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to="/rooms" className="text-white ">
                    <button className="  border hover:bg-slate-700 p-2 text-xs w-30 md:w-56 lg:text-base text-[#d3a955] bg-black  border-[#d3a955] ">Explore All Rooms</button>
                </Link>
            </div>

        </div>
    );
};

export default TopRatedRooms;
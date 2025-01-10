import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomCard from '../RoomCard/RoomCard';
import { Helmet } from 'react-helmet';

const Rooms = () => {
    const initialRooms = useLoaderData(); 
    const [rooms, setRooms] = useState(initialRooms); 

    const handleSort = (sortOrder) => {
        fetch(`https://resto-rooms-server.vercel.app/allSortedRooms?sort=${sortOrder}`)
            .then((response) => response.json())
            .then((sortedData) => setRooms(sortedData))
            .catch((error) => console.error('Error fetching sorted rooms:', error));
    };

    return (
        <div className='w-11/12 mx-auto'>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Rooms| RestoRooms</title>
            </Helmet>
            <h1 className='text-center font-bold text-[#d3a955] text-xl md:text-5xl pt-12'>
                Find Your Perfect Stay shortly
            </h1>
            <p className='text-center text-white mt-4 mb-6'>
                Browse our rooms and find the perfect stay for your needs. <br />
                Comfort and relaxation are just a click away!
            </p>

           
            <div className='text-center space-y-1 space-x-2 mb:flex mb-6'>
                <button
                    className=' px-1 py-2 bg-[#d3a955] text-white rounded'
                    onClick={() => handleSort('asc')}
                >
                    Price: Low to High
                </button> 
                
                <button
                    className='px-1 py-2 bg-[#d3a955] text-white rounded'
                    onClick={() => handleSort('desc')}
                >
                    Price: High to Low
                </button>
            </div>

           
            <div className='mt-16 flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8'>
                    {rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rooms;

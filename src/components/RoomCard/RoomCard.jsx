import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { _id, name, description, price, image, capacity, type, features, reviewCount, availability } = room;
    const navigate = useNavigate();
    const handleCardClick = () =>{
        navigate(`/roomDetails/${_id}`);

    }
    return (
        <div onClick={handleCardClick}>
            <div className="card border-[#d3a955] border bg-[#181024] text-white hover:bg-white hover:text-black w-80 h-[425px] shadow-xl">
                <figure>
                    <img
                    className='h-44 w-full'
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary bg-[#d3a955] ">{availability===true? 'Available' : 'Unavailable'}</div>
                    </h2>
                    <p>{description}</p>
                    <p>Reviews: {reviewCount}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline border-[#d3a955] text-[#d3a955] ">${price}</div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopRatedRoomCards = ({ room }) => {
    const { _id, name, description, price, image, capacity, type, features, reviewCount, availability } = room;
    const navigate = useNavigate();
    const handleBooking = () => {
        navigate(`/roomDetails/${_id}`);
    }
    return (
        <div>
            <div className="card border-[#d3a955] border bg-[#181024] text-white   h-[375px] shadow-xl">
                <figure>
                    <img
                        className='h-44 object-cover w-full'
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[18px]">
                        {name}

                    </h2>
                    <p className='line-clamp-2 text-sm'>{description}</p>
                    <p>Reviews: {reviewCount}</p>
                    <div className="card-actions  justify-between mt-2">
                        <button onClick={handleBooking} className='border-[#d3a955] text-[#d3a955] w-28 border hover:bg-[#301b51] rounded-lg hover:text-white '>Book Now</button>
                        <div className="badge badge-outline border-[#d3a955] text-[#d3a955] ">${price}</div>



                    </div>


                </div>

            </div>

        </div>
    );
};

export default TopRatedRoomCards;
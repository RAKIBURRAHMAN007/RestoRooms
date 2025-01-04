import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';
import TopCityHotels from '../TopCityHotels/TopCityHotels';
import QnaSection from '../QnaSection/QnaSection';
import Reviews from '../Reviews/Reviews';
import TopRatedRooms from '../TopRatedRooms/TopRatedRooms';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            {isModalVisible && (
                <div className="fixed inset-0  bg-gray-500 bg-opacity-10 flex justify-center items-center z-50">
                    <div
                        className="bg-cover bg-center border-2 border-[#d3a955]  rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-8 relative"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/3hQS6G8/sunset-coming-through-windows-hotel.jpg')`,
                        }}
                    >
                        <div className=''>
                            <div className="text-center  text-white">
                                <h2 className="text-3xl font-bold mb-4">Special Offers</h2>


                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
                                >
                                    X
                                </button>
                            </div>

                            <div className="text-center   text-white">

                                <div className="">
                                    <h3 className="text-xl font-semibold">20% Off on All Rooms</h3>
                                    <p>Book now to enjoy a 20% discount on your stay!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home| RestoRooms</title>
            </Helmet>
            <Banner />
            <Map />
            <TopRatedRooms></TopRatedRooms>

            <TopCityHotels />
            <Reviews></Reviews>
            <QnaSection />
        </div>
    );
};

export default Home;

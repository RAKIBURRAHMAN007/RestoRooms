import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from 'lottie-react';
import reviewLottie from '../../assets/lottie/review.json'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://resto-rooms-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => {
                console.log('Reviews fetched:', data);
                setReviews(data);
            });
    }, []);

    // Slick slider settings
    const settings = {
       
        infinite: true,  
        speed: 500,  
        slidesToShow: 1,  
        slidesToScroll: 1,  
        autoplay: true,  
        autoplaySpeed: 3000, 
    };

    return (
        <div className="mt-20 w-11/12  mx-auto">
            <h2 className="text-2xl text-[#d3a955] mb-10 font-bold text-center">What Our Users Are Saying</h2>
            <div className='md:flex items-center bg-[#181024]'>
                <div className='md:w-1/2' >
                    <Lottie animationData={reviewLottie}></Lottie>
                </div>
                <div className='px-8 md:px-0 md:w-1/3'>
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card p-4 border rounded shadow-md bg-white">
                                <div className=" ">
                                    <p className="font-semibold text-lg">Name: {review.username}</p>
                                    
                                    <p className="text-sm text-gray-600">Ratting:</p>

                                    <div className="">
                                        
                                        
                                        <span className="text-yellow-500">{"★".repeat(Number(review.rating))}</span>
                                        <span className="text-gray-400">{"★".repeat(5 - Number(review.rating))}</span>
                                    </div>
                                </div>
                                <p className="text-sm font-bold">Comment:</p>
                                <p className="text-sm text-gray-600">{review.comment}</p>
                                <div className="text-xs text-gray-400 mt-2">Date: {new Date(review.timestamp).toLocaleDateString()}</div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from "../../assets/img/slider1.jpg";
import img2 from "../../assets/img/slider2.jpg";
import img3 from "../../assets/img/slider3.jpg";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' mt-1 mb-2 w-11/12 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full bg-cover h-[200px]  md:h-[500px]' src={img1} alt="Banner 2" />
                        <div className="absolute bottom-4 mx-3  md:bottom-10 md:left-5 text-white bg-black/80 md:p-4 p-1 rounded-lg">
                            <h2 className="text-xs md:text-4xl font-bold text-shadow-md">Welcome to RestoRooms</h2>
                            <p className="text-xs md:text-lg mt-2 mb-2">Discover comfortable and affordable rooms for your perfect stay. Book your room now and enjoy a relaxing experience.</p>

                            <Link to="/rooms" className="text-white ">
                                <button className="  border hover:text-red-400 p-2 text-xs w-30 md:w-40 lg:text-base text-[#d3a955] bg-black  border-[#d3a955] ">Explore More</button>
                            </Link>


                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full bg-cover h-[200px] md:h-[500px]' src={img2} alt="Banner 4" />
                        <div className="absolute bottom-4 mx-3  md:bottom-10 md:left-5 text-white bg-black/80 md:p-4 p-1 rounded-lg">
                            <h2 className="text-xs md:text-4xl font-bold text-shadow-md">Family-Friendly Stays</h2>
                            <p className=" text-xs md:text-lg mt-2 mb-2">Enjoy a comfortable family vacation in our spacious rooms, with all the amenities needed for a perfect stay.</p>
                            <Link to="/rooms" className="text-white ">
                                <button className="  border hover:text-red-400 p-2 text-xs w-30 md:w-40 lg:text-base text-[#d3a955] bg-black  border-[#d3a955] ">Explore More</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full bg-cover h-[200px] md:h-[500px]' src={img3} alt="Banner 3" />
                        <div className="absolute bottom-4 mx-3  md:bottom-10 md:left-5 text-white bg-black/80 md:p-4 p-1 rounded-lg">
                            <h2 className="text-xs md:text-4xl font-bold text-shadow-md">Unbeatable Comfort</h2>
                            <p className=" text-xs md:text-lg mt-2 mb-2">Indulge in luxury with our well-appointed rooms. Designed for your convenience, comfort, and a memorable stay.</p>
                            <Link to="/rooms" className="text-white ">
                                <button className="  border hover:text-red-400 p-2 text-xs w-30 md:w-40 lg:text-base text-[#d3a955] bg-black  border-[#d3a955] ">Explore More</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;

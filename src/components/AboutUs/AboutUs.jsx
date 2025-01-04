import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <div className="bg-gray-900 border border-[#d3a955] text-white mt-10 w-11/12 mx-auto p-6 sm:p-12 md:p-16 lg:p-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>AboutUs| RestoRooms</title>
            </Helmet>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

               
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://i.ibb.co/kHhfhXm/christian-lambert-vm-IWr0-Nnp-CQ-unsplash-1.jpg"
                        alt="About Us"
                        className="w-full h-full border border-[#d3a955] object-cover rounded-lg"
                    />
                </div>

              
                <div className="flex flex-col justify-between">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-4">
                        Welcome to <strong>RestoRooms</strong>, where we aim to provide you with an exceptional experience while booking your next stay. Our platform is designed to offer a seamless, user-friendly service for discovering and reserving hotel rooms, combining modern design with secure functionality.
                    </p>

                    <h2 className="text-2xl font-semibold my-4">Our Mission</h2>
                    <p className="text-lg mb-6">
                        Our goal is to create a platform that makes hotel booking easy and reliable. Whether you're booking a quick getaway or a long-term stay, we ensure every part of the experience is convenient, secure, and enjoyable.
                    </p>

                    <h2 className="text-2xl font-semibold my-4">What We Offer</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Wide Selection of Rooms: Our platform showcases a variety of rooms to suit every need, from luxurious suites to affordable options, all carefully selected based on guest ratings.</li>
                        <li>Easy Booking Process: With just a few clicks, you can browse, choose, and book your ideal room without hassle.</li>
                        <li>Secure and Reliable: We use secure authentication methods to ensure your personal and booking information is safe and protected.</li>
                    </ul>

                    {/* Contact Info Section */}
                    <h2 className="text-2xl font-semibold my-4">Get in Touch</h2>
                    <p className="text-lg mb-4">
                        Feel free to reach out to us if you have any questions or need assistance with your booking. Our team is here to help!
                    </p>
                    <p className="text-lg mb-2 text-[#d3a955]"><strong className='text-white'>Owner Contact Name:</strong> Rakibur Rahman Ratul</p>
                    <p className="text-lg mb-2"><strong>Email:</strong> <a href="mailto:ratulrakibur5@gmail.com" className="text-[#d3a955]">ratulRakibur5@gmail.com</a></p>
                    <p className="text-lg"><strong>Mobile:</strong> <a href="tel:+8801636352751" className="text-[#d3a955]">01636352751</a></p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

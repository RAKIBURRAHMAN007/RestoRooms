import React from 'react';

const QnaSection = () => {
    return (
        <div className='w-11/12 mx-auto mt-20'>
            <h1 className='text-center text-[#d3a955] shadow-lg font-extrabold text-xl md:text-5xl'>Frequently Asked <br /> Questions</h1>
            <p className='text-white text-center mt-5'>Have questions? Our FAQ section is here to help! Find answers to common queries about booking,<br /> payment, and more. If you need further assistance, don’t hesitate to contact us!</p>
            <div className='mt-16'>
                <div className="collapse collapse-arrow text-white bg-[#181024]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-[#d3a955] text-xl font-medium">How do I book a hotel on your website?</div>
                    <div className="collapse-content">
                        <p className='opacity-70'>To book a hotel, simply browse through our top cities and select the hotel you're interested in. Choose your check-in and check-out dates, enter your personal details, and proceed with the payment to complete your reservation.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow text-white bg-[#181024]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-[#d3a955] font-medium">Can I cancel or modify my booking?</div>
                    <div className="collapse-content">
                        <p className='opacity-70'> Yes, you can cancel or modify your booking, but cancellation policies may vary depending on the hotel. Please refer to the specific hotel's cancellation policy at the time of booking. Contact our customer support for assistance with modifications.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow text-white bg-[#181024]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[#d3a955] text-xl font-medium"> Do you offer any discounts or promotions?</div>
                    <div className="collapse-content">
                        <p className='opacity-70'> Yes, we offer regular discounts and special promotions! Be sure to subscribe to our newsletter or check our "Special Offers" section for the latest deals and discounts on your bookings.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow text-white bg-[#181024]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[#d3a955] text-xl font-medium">Are the hotel reviews real and trustworthy?</div>
                    <div className="collapse-content">
                        <p className='opacity-70'> Yes, all reviews are written by verified guests who have stayed at the hotel. We encourage guests to leave honest feedback based on their experiences to help others make informed decisions.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow text-white bg-[#181024]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[#d3a955] text-xl font-medium">Are pets allowed in the hotels?</div>
                    <div className="collapse-content">
                        <p className='opacity-70'>Pet policies vary by hotel. Please check the hotel's page for specific details on their pet policy, or feel free to contact us for more information.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QnaSection;
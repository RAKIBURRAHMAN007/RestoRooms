import React, { useContext, useEffect, useState } from "react";
import {
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Don't forget to import the CSS
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import axios, { Axios } from "axios";
import { Helmet } from "react-helmet";

const RoomDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const roomData = useLoaderData();
  const {
    _id,
    room_id,
    name,
    description,
    price,
    image,
    capacity,
    type,
    features,
    reviewCount,
    availability,
  } = roomData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availabilityy, setAvailability] = useState(roomData.availability);
  const [reviews, setReviews] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetch(`https://resto-rooms-server.vercel.app/reviews/?room_id=${room_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [room_id]);

  const handleBookNow = () => {
    if (!user?.email) {
      navigate("/login", { state: location.pathname });
    } else {
      openModal();
    }
  };

  const handleConfirmBooking = () => {
    if (!selectedDate) {
      toast.warn("Please Select A Date");
      return;
    }
    const bookingData = {
      email: user.email,
      bookingDate: selectedDate,
      name,
      description,
      room_id,
      price,
      image,
      capacity,
      type,
      features,
      reviewCount,
      availability: false,
    };

    fetch("https://resto-rooms-server.vercel.app/bookedRooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const updatedRoom = { availability: false };
          toast.success("Room Booked Successfully");
          fetch(`https://resto-rooms-server.vercel.app/rooms/${room_id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRoom),
          })
            .then((response) => response.json())
            .then((data) => {
              setAvailability(false);
            })
            .catch((error) => {
              console.error("Error updating room:", error);
            });
        }
      });

    closeModal();
  };

  return (
    <div className="bg-gray-900 border border-[#d3a955] text-white mt-10 w-11/12 mx-auto p-6 sm:p-12 md:p-16 lg:p-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Room Details| RestoRooms</title>
      </Helmet>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-[600px] border border-[#d3a955] object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-lg mb-4">{description}</p>
          <p className="text-xl font-semibold mb-4">
            Price: <span className="text-green-400">${price}</span>
          </p>
          <p className="text-lg mb-4">
            <strong>Capacity:</strong> {capacity} people
          </p>
          <p className="text-lg mb-4">
            <strong>Type:</strong> {type}
          </p>

          <p className="text-lg font-semibold mb-2">Features:</p>
          <ul className="list-disc pl-6 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>

          <p className="text-lg mb-4">
            <strong>Reviews:</strong> {reviewCount} reviews
          </p>
          <p className="text-lg mb-4">
            <strong>Availability:</strong>{" "}
            {availabilityy ? "Available" : "Not Available"}
          </p>

          {/* Reviews Section */}

          <button
            onClick={handleBookNow}
            className={`border ${
              availabilityy === false
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-[#d3a955] text-white"
            } font-semibold py-2 px-6 rounded-lg mt-6 transition duration-300 ease-in-out transform hover:scale-105`}
            disabled={!availabilityy}
          >
            {availabilityy === true ? "Book Now" : "Room Booked"}
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-500 pb-4">
                <p className="text-lg font-semibold">
                  Name : {review.username}
                </p>
                <p className="text-gray-300">Comment : {review.comment}</p>
                <p className="text-sm text-gray-500">
                  Rating: {review.rating} / 5⭐
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No reviews yet.</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12">
            <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>

            <div className="mb-4">
              <p>
                <strong>Room:</strong> {name}
              </p>
              <p>
                <strong>Price:</strong> ${price}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
              <p>
                <strong>Capacity:</strong> {capacity} people
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="booking-date"
                className="block text-lg font-semibold mb-2"
              >
                Select Booking Date:
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full p-2 border rounded-lg"
                placeholderText="Select a date"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleConfirmBooking}
                className="border bg-[#d3a955] text-white font-semibold py-2 px-4 rounded-lg"
              >
                Confirm Booking
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;

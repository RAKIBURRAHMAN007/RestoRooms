import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";

const MyBookingTable = ({ bookedRoom, setBookedRooms }) => {
  const {
    _id,
    room_id,
    name,
    description,
    reviewCount,
    price,
    image,
    type,
    bookingDate,
  } = bookedRoom;
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);
  const bookingDateObj = new Date(bookingDate);
  const cancellationDeadline = new Date(bookingDateObj);
  cancellationDeadline.setDate(bookingDateObj.getDate() - 2);

  const isCancelable = new Date() <= cancellationDeadline;

  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRoom = { availability: true };

        fetch(`https://resto-rooms-server.vercel.app/rooms/${room_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRoom),
        }).catch((error) => console.error("Error updating room:", error));

        fetch(`https://resto-rooms-server.vercel.app/bookedRooms/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setBookedRooms((prevRooms) =>
                prevRooms.filter((room) => room._id !== _id)
              );
              Swal.fire({
                title: "Cancelled!",
                text: "Your Room Booking has been cancelled.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "There was an issue with the deletion.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleUpdateDate = () => {
    if (!selectedDate) {
      Swal.fire({
        title: "Error!",
        text: "Please select a date before updating.",
        icon: "error",
      });
      return;
    }

    const updatedBooking = { bookingDate: selectedDate };

    fetch(`https://resto-rooms-server.vercel.app/bookedRooms/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your booking date has been updated.",
            icon: "success",
          });

          setBookedRooms((prevRooms) =>
            prevRooms.map((room) =>
              room._id === _id ? { ...room, bookingDate: selectedDate } : room
            )
          );
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "There was an issue updating the date.",
          icon: "error",
        });
      });
  };

  const handleReviewSubmit = () => {
    const review = {
      username: user.displayName,
      rating,
      comment,
      timestamp: new Date().toISOString(),
      room_id: room_id,
    };

    fetch("https://resto-rooms-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your review has been submitted.",
            icon: "success",
          });
          setIsModalOpen(false);
        }
      });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt={name} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{description}</div>
            </div>
          </div>
        </td>
        <td>{type}</td>
        <td>${price}</td>
        <td>{new Date(bookingDate).toLocaleDateString()}</td>
        <th className="flex flex-col gap-2">
          <button
            onClick={handleCancel}
            className={`text-[#d3a955] border border-[#d3a955] btn-xs ${
              !isCancelable ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={!isCancelable}
          >
            Cancel
          </button>

          <div className="flex items-center gap-1 justify-between">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              className="p-1 text-black text-opacity-100 bg-[#d3a955] rounded-lg"
              placeholderText="Select a date"
              popperPlacement="bottom-start"
              portalId="root-portal"
              timeZone="local"
            />
            <button
              onClick={handleUpdateDate}
              className="text-[#d3a955] w-1/2 border border-[#d3a955]"
            >
              Update
            </button>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[#d3a955] border border-[#d3a955] btn-xs"
          >
            Review
          </button>
        </th>
      </tr>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#181024] p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Leave a Review</h3>
            <div className="mb-4">
              <label className="block font-semibold">Username</label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="w-full p-2 border text-black border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 pl-2 bg-white">
              <label className="block text-black font-semibold">Rating</label>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask  mask-star"
                  value="1"
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  value="2"
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  value="3"
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  value="4"
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  value="5"
                  onChange={handleRatingChange}
                />
              </div>
              <p className="text-black">Your selected rating: {rating}</p>
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border text-black border-gray-300 rounded"
                rows="4"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-700 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleReviewSubmit}
                className="px-4 py-2 bg-[#d3a955] text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyBookingTable;

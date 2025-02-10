import React, { useState } from "react";
import img from "../../assets/img/Messages-cuate.png";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const CustomerCare = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingId: "",
    issueType: "",
    message: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      "We’ve received your concern and will get back to you shortly."
    );
    setFormData({
      name: "",
      email: "",
      bookingId: "",
      issueType: "",
      message: "",
      file: null,
    });
  };

  return (
    <div className="customer-care-page bg-gray-900 mt-9 p-6 text-white w-11/12 mx-auto border border-yellow-500">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contract | RestoRooms</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mt-6 mb-6">
        We're Here to Help You
      </h1>
      <p className="text-center mb-8">
        At <span className="font-semibold text-yellow-400">RestoRoom</span>,
        your satisfaction is our top priority. Whether you have questions, need
        support,
        <br /> or want to share feedback, our Customer Care team is ready to
        assist you.
      </p>

      {/* Image and Contact Options Section */}
      <div className="lg:flex items-center justify-between lg:p-8">
        <div className="w-full flex justify-center lg:flex-none lg:w-1/3 mb-8 md:mb-0">
          <img
            className="lg:w-full w-1/2 rounded-md shadow-lg"
            src={img}
            alt="Help Image"
          />
        </div>
        <div className="w-full lg:w-2/3 grid lg:grid-cols-2 gap-8 rounded-lg lg:p-6 shadow-xl">
          <div className="p-6 shadow-lg rounded-md border-opacity-75 border  border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">How Can We Help?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
              <li>Booking Issues</li>
              <li>Payment Problems</li>
              <li>Refund Requests</li>
              <li>Room Complaints</li>
              <li>General Queries</li>
            </ul>
          </div>

          <div className="p-6 shadow-lg rounded-md border-opacity-75 border border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">Contact Options</h2>
            <p className="mb-4 text-lg text-gray-300">
              <strong>Email Support:</strong> Drop us an email at{" "}
              <span className="text-yellow-400">ratulrakibur5@gmail.com</span>,
              and we’ll respond within 24 hours.
            </p>
            <p className="mb-4 text-lg text-gray-300">
              <strong>Phone Support:</strong> Call us at{" "}
              <span className="text-yellow-400">01636352751</span> during
              business hours.
            </p>
          </div>
        </div>
      </div>

      {/* Complaint Form Section */}
      <div className="p-6 shadow-md rounded-md mt-8 bg-inherit  ">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">
          Complaint Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-semibold mb-1 text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-300">
                Mobile Number (Optional)
              </label>
              <input
                type="text"
                name="bookingId"
                value={formData.bookingId}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-300">
                Issue Type
              </label>
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-gray-700 text-white"
                required
              >
                <option value="">Select an issue</option>
                <option value="booking">Booking Issues</option>
                <option value="payment">Payment Problems</option>
                <option value="refund">Refund Requests</option>
                <option value="room">Room Complaints</option>
                <option value="general">General Queries</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-gray-300">
              Message/Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border rounded bg-gray-700 text-white"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-gray-300">
              Upload File (Optional)
            </label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full text-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerCare;

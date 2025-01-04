import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page not found</h2>
      <p className="text-lg text-gray-400 mb-8 text-center">
        The page you are looking for doesn’t exist or an error occurred. <br />
        Please check the URL or go back to the home page.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-[#d3a955] text-white font-semibold rounded-lg hover:bg-[#b38848] transition-all duration-300 ease-in-out"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;

import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const axiosInstance = axios.create({
  baseURL: "https://resto-rooms-server.vercel.app/",
  withCredentials: true,
});
const UseAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default UseAxiosSecure;

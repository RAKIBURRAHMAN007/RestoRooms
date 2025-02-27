import { Children, createContext, useEffect, useState } from "react";
import app from "../fireBase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  const authInfo = {
    createNewUser,
    user,
    setUser,
    googleSignIn,
    logOut,
    userLogin,
    loading,
    setLoading,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const loggedUser = { email: currentUser.email };
        axios
          .post("https://resto-rooms-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((data) => {
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://resto-rooms-server.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            setLoading(false);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

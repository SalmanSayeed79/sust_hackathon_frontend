import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
// import { UserIDContext, UserIDUpdateContext, UserTypeContext, UserTypeUpdateContext } from '../Context/UserContext'
import axios from "axios";
import { UserAuth } from "../Hooks/AuthContext";
import { API_ENDPOINT, BASE_URL } from "../Data/apiData";
import { useUserIDUpdate } from "../Hooks/userContext";
import { CircularProgress } from "@mui/material";
// import info from '../data/MainText'
export default function CreateAccount() {
  const updateBuldrID = useUserIDUpdate();
  const baseURL = API_ENDPOINT;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lat, setlat] = useState("");
  const [lng, setLng] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");
  const [coverPic, setCoverPic] = useState("");
  const [addr, setAddr] = useState("");

  const [loggingIn, setLogggingIn] = useState(false);
  // const userTypeChange=useContext(UserTypeUpdateContext)
  // const userIDChange=useContext(UserIDUpdateContext)
  const navigator = useNavigate();

  const { createUser, user } = UserAuth();
  const createUserAccount = async () => {
    //await createUser(email,password)
    return await axios.post(`${BASE_URL}/shop`, {
      shop_name: name,
      email,
      address: addr,
      lat,
      lng,
      color,
      picture,
      cover_pic: coverPic,
    });
  };
  const handleSubmit = async () => {
    try {
      setLogggingIn(true);
      await createUser(email, password);
      const res = await createUserAccount();
      console.log(res);
      updateBuldrID(res.data.shop_id);
      navigator("/options");
    } catch (e) {
      console.log(e);
      alert("Something went wrong...");
      setLogggingIn(false);
    } finally {
      setLogggingIn(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div
            className="flex h-20 items-center justify-center"
            style={{ alignItems: "center" }}
          >
            <img
              className="w-12 h-12  hidden md:flex"
              src="https://i.postimg.cc/FzB1TScv/image.png"
            />
            <h2 className="text-2xl font-bold text-black font-title dark:text-gray-100">
              <span className="text-primary-500">Bebsha.</span>AI
            </h2>
          </div>
          <div class="w-full bg-white noscrollbar rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create An Account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Shop Name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Latitude"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setlat(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Longitude"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setLng(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Logo"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setPicture(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Cover Picture"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setCoverPic(e.target.value)}
                />

                {!loggingIn && (
                  <button
                    type="submit"
                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={handleSubmit}
                  >
                    Create Account
                  </button>
                )}
                {loggingIn && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress />
                    <h2 sx={{ marginLeft: "10px" }}> Creating Account</h2>
                  </div>
                )}
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={() => navigator("/")}
                >
                  View As Guest
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already Have an account?{" "}
                  <a
                    onClick={() => navigator("/login")}
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

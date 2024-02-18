import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Data/apiData";
import axios from "axios";
import LoaderPage from "../Components/LoaderPage";
import { IDContextProvider, useUserID } from "../Hooks/userContext";
import { MdDone, MdModeEdit } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import Navbar from "../Components/Navbar";
import NavigationWide from "../Components/Navigation";
export default function ShopProfile() {
  const shopId = useUserID();
  const [editName, setEditName] = useState(false);
  const [editLat, setEditLat] = useState(false);
  const [editLng, setEditLng] = useState(false);
  const [editAddr, setEditAdrr] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [editCoverpic, setEditCoverPic] = useState(false);
  const [editPicture, setEditPicture] = useState(false);

  const [name, setName] = useState("");
  const [lat, setlat] = useState("");
  const [lng, setLng] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");
  const [coverPic, setCoverPic] = useState("");
  const [addr, setAddr] = useState("");
  const [email, setEmail] = useState("");

  const updateShop = async () => {
    setLoading(true)
    await axios.put(`${BASE_URL}/shop/${shopId}`, {
      shop_name: name,
      email,
      address: addr,
      lat,
      lng,
      color,
      picture,
      cover_pic: coverPic,
    });
    setLoading(false)
  };
  const [shopData, setShopData] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const res = await axios.get("http://localhost:8000/shop/" + shopId);
    console.log(res.data);
    setShopData(res.data);
    setName(res.data.shop_name)
    setLng(res.data.lng)
    setlat(res.data.lat)
    setColor(res.data.color)
    setPicture(res.data.picture)
    setCoverPic(res.data.cover_pic)
    setAddr(res.data.address)
    setEmail(res.data.email)
    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) return <LoaderPage />;
  return ( 
    <>
    <NavigationWide/>
    <div className="w-screenoverflow-clip flex flex-col items-center">
      
      <div className="flex w-screen max-w-7xl flex-col  items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Shop Details 🌁</h5>
      </div>
    
      <div className="flex w-full flex-col max-w-7xl items-center mx-4 mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        <form className="w-full">
          {/** SHOP NAME */}
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 text-primary-400"
            >
              Shop Name
            </label>
            {!editName && (
              <div className=" flex items-center ">
                <h4
                  for="title"
                  class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2"
                >
                  {name}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditName(true)}
                  class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <MdModeEdit size={18} className="dark:text-white" />
                </button>
              </div>
            )}
            {editName && (
              <div class="relative w-full ">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                />
                <button
                  onClick={() => setEditName(false)}
                  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <MdDone size={18} />
                </button>
              </div>
            )}
          </div>

          {/** LAT */}
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 text-primary-400"
            >
              Shop Latitude
            </label>
            {!editLat && (
              <div className=" flex items-center ">
                <h4
                  for="title"
                  class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2"
                >
                  {lat}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditLat(true)}
                  class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <MdModeEdit size={18} className="dark:text-white" />
                </button>
              </div>
            )}
            {editLat && (
              <div class="relative w-full ">
                <input
                  onChange={(e) => setlat(e.target.value)}
                  value={lat}
                  type="text"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                />
                <button
                  onClick={() => setEditLat(false)}
                  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <MdDone size={18} />
                </button>
              </div>
            )}
          </div>
          {/** SHOP LNG */}
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 text-primary-400"
            >
              Shop longitude
            </label>
            {!editLng && (
              <div className=" flex items-center ">
                <h4
                  for="title"
                  class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2"
                >
                  {lng}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditLng(true)}
                  class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <MdModeEdit size={18} className="dark:text-white" />
                </button>
              </div>
            )}
            {editLng && (
              <div class="relative w-full ">
                <input
                  onChange={(e) => setLng(e.target.value)}
                  value={lng}
                  type="text"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                />
                <button
                  onClick={() => setEditLng(false)}
                  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <MdDone size={18} />
                </button>
              </div>
            )}
          </div>
          {/** SHOP Color */}
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 text-primary-400"
            >
              Shop Color
            </label>
            {!editColor && (
              <div className=" flex items-center ">
                <h4
                  for="title"
                  class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2"
                >
                  {color}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditColor(true)}
                  class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <MdModeEdit size={18} className="dark:text-white" />
                </button>
              </div>
            )}
            {editColor && (
              <div class="relative w-full ">
                <input
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                  type="text"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                />
                <button
                  onClick={() => setEditColor(false)}
                  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <MdDone size={18} />
                </button>
              </div>
            )}
          </div>
          {/** SHOP Picture */}
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 text-primary-400"
            >
              Shop Picture URL
            </label>
            {!editPicture && (
              <div className=" flex items-center ">
                <h4
                  for="title"
                  class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2"
                >
                  {picture}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditPicture(true)}
                  class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <MdModeEdit size={18} className="dark:text-white" />
                </button>
              </div>
            )}
            {editPicture && (
              <div class="relative w-full ">
                <input
                  onChange={(e) => setPicture(e.target.value)}
                  value={picture}
                  type="text"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                />
                <button
                  onClick={() => setEditPicture(false)}
                  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <MdDone size={18} />
                </button>
              </div>
            )}
          </div>
          {/** SHOP CoverPic */}
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 text-primary-400"
            >
              Shop Cover Picture
            </label>
            {!editCoverpic && (
              <div className=" flex items-center ">
                <h4
                  for="title"
                  class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2"
                >
                  {coverPic}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditCoverPic(true)}
                  class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <MdModeEdit size={18} className="dark:text-white" />
                </button>
              </div>
            )}
            {editCoverpic && (
              <div class="relative w-full ">
                <input
                  onChange={(e) => setCoverPic(e.target.value)}
                  value={coverPic}
                  type="text"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                />
                <button
                  onClick={() => setEditCoverPic(false)}
                  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <MdDone size={18} />
                </button>
              </div>
            )}
          </div>
          {/** SHOP Address */}
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 text-primary-400"
            >
              Shop Address
            </label>
            {!editAddr && (
              <div className=" flex items-center ">
                <h4
                  for="title"
                  class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white mr-2"
                >
                  {addr}
                </h4>
                <button
                  type="button"
                  onClick={() => setEditAdrr(true)}
                  class="hover:text-white shadow-lg bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 mx-2 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  <MdModeEdit size={18} className="dark:text-white" />
                </button>
              </div>
            )}
            {editAddr && (
              <div class="relative w-full ">
                <input
                  onChange={(e) => setAddr(e.target.value)}
                  value={addr}
                  type="text"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                />
                <button
                  onClick={() => setEditAdrr(false)}
                  class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <MdDone size={18} />
                </button>
              </div>
            )}
          </div>
     

         

          <button
            className="w-full max-w-7xl mt-4 bg-primary-500 text-white rounded-lg font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={updateShop}
          >
            {!loading && "Submit"}
            {loading && <div><CircularProgress/> Submitting...</div>}
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

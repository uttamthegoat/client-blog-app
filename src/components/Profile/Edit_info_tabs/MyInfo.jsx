import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUserInfoUpdate, imageChange_apiCall } from "../apiCall";
import {
  selectBio,
  selectName,
  selectUser,
  setUserInfo,
} from "../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const navigate = useNavigate();
  const userBio = useSelector(selectBio);
  const userName = useSelector(selectName);
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("type", "User");
      formData.append("email", "uttam@gmail.com");
      imageChange_apiCall(navigate, dispatch, formData);
    }
  };

  const handleInfoChange = (e) => {
    dispatch(setUserInfo({ ...userInfo, [e.target.name]: e.target.value }));
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    handleUserInfoUpdate(navigate, dispatch, userName, userBio);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="ms-2 mt-3 mb-4 text-2xl font-bold">
        Change Profile Image
      </h1>
      <form className="flex flex-col">
        <input
          type="file"
          accept="image/*"
          name="file"
          id="fileUpload"
          onChange={handleFileChange}
          className="text-sm text-stone-500 file:w-32
   file:mr-5 file:py-1 file:px-3 file:border-[1px]
   file:text-xs file:font-medium font-semibold
   file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700 mx-4"
        />
        <button
          type="button"
          onClick={handleUpload}
          className="w-44 my-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mx-auto"
        >
          Upload Image
        </button>
      </form>

      <p className="mt-10 mx-4 text-2xl font-bold">My Information</p>
      <form onSubmit={handleInfoSubmit} className="flex flex-col w-full md:w-[500px]">
        <label htmlFor="user_Name" className="font-semibold mt-4 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="user_Name"
          value={userName}
          onChange={handleInfoChange}
          placeholder="Enter your name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label htmlFor="user_Email" className="font-semibold mt-4 mb-2">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="user_Email"
          defaultValue={userInfo.email}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
        <label htmlFor="user_Bio" className="font-semibold mt-4 mb-2">
          Bio
        </label>
        <input
          type="text"
          name="bio"
          id="user_Bio"
          value={userBio}
          onChange={handleInfoChange}
          placeholder="Enter about yourself..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button type="submit" className="mt-6 w-[156px] mx-auto relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-bold">
          <span className=" w-full relative px-3 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Save Changes
          </span>
        </button>
      </form>
    </div>
  );
};

export default MyInfo;

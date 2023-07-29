import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_SocialMedia, update_SocialMedia } from "../apiCall";
import { fieldValue, socialMedia_Fields } from "../../../assets/constants";

const SocialMedia = () => {
  const [userLinks, setUserLinks] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    get_SocialMedia(setUserLinks, navigate, dispatch);
  }, []);

  const handleLinksChange = (e) => {
    setUserLinks({ ...userLinks, [e.target.name]: e.target.value });
  };

  const handleSocialMediaDets = (e) => {
    e.preventDefault();
    update_SocialMedia(navigate, dispatch, userLinks);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold text-xl mb-5">My Social Media</h1>

      <form
        onSubmit={handleSocialMediaDets}
        className="flex flex-col w-full md:w-[500px]"
      >
        {socialMedia_Fields.map((field) => {
          return (
            <div key={field.id} className="flex flex-col">
              <label
                htmlFor={field.id}
                className="mt-4 mb-2 text-md font-semibold"
              >
                {field.id}
              </label>
              <input
                type="text"
                name={field.name}
                id={field.id}
                value={fieldValue(userLinks, field.name)}
                onChange={handleLinksChange}
                placeholder={field.placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="w-44 mx-auto mt-6 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Save Changes
          </span>
        </button>
      </form>
    </div>
  );
};

export default SocialMedia;

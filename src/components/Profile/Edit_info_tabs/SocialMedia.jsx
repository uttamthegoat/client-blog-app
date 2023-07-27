import React from "react";

const SocialMedia = () => {
  const handleSocialMediaDets = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold text-xl mb-5">My Social Media</h1>
      <form
        onSubmit={handleSocialMediaDets}
        className="flex flex-col w-full md:w-[500px]"
      >
        <label htmlFor="Instagram" className="mt-4 mb-2 text-md font-semibold">
          Instagram
        </label>
        <input
          type="text"
          name=""
          id="Instagram"
          placeholder="Enter Instagram url here..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label htmlFor="Facebook" className="mt-4 mb-2 text-md font-semibold">
          Facebook
        </label>
        <input
          type="text"
          name=""
          id="Facebook"
          placeholder="Enter Facebook url here..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label htmlFor="Twitter" className="mt-4 mb-2 text-md font-semibold">
          Twitter
        </label>
        <input
          type="text"
          name=""
          id="Twitter"
          placeholder="Enter Twitter url here..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label htmlFor="LinkedIn" className="mt-4 mb-2 text-md font-semibold">
          LinkedIn
        </label>
        <input
          type="text"
          name=""
          id="LinkedIn"
          placeholder="Enter LinkedIn url here..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
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

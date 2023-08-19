import React from "react";
import BlogCard from "../Home/BlogCard";
import { searchString } from "./apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchForIt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  const [searchPosts, setSearchPosts] = React.useState({
    totalResults: 0,
    results: [],
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("submit");
    searchString(navigate, dispatch, searchValue,setSearchPosts);
  };

  return (
    <div>
      <div className="w-full px-2 sm:w-10/12 md:w-9/12 mx-auto mt-10">
        {/* search */}
        <form onSubmit={handleSearch} className="flex flex-col">
          <label
            htmlFor="searchPage"
            className="text-center mb-4 text-lg sm:text-2xl font-bold"
          >
            Search for a title, tag or keyword.
          </label>
          <input
            type="text"
            name="searchPage"
            id="searchPage"
            placeholder="Search for a title, tag, or keyword..."
            className="outline-none placeholder:text-gray-500 px-3 h-10 rounded-lg w-full sm:w-11/12 md:w-[510px] block mx-auto"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* <button type="submit">Search</button> */}
        </form>
      </div>
      <div className="w-full px-2 sm:w-10/12 md:w-9/12 mx-auto my-10">
        {/* posts */}
        {!searchPosts.results.length && (
          <div>
            <i className="fa-regular fa-message text-9xl block text-center"></i>
            <p className="text-center text-2xl font-semibold">
              Sorry, no results found.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          {searchPosts.results.map((blog) => {
            return (
              <div key={blog._id}>
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchForIt;

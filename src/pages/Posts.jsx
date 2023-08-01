import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [totalResults, setTotalResults] = useState(0);

  const fetchPosts = async (page) => {
    const response = await axios.get(
      `/posts?page=${page}&pageSize=${pageSize}`
    );
    const data = response.data;
    setPosts(data.results);
    setTotalResults(data.totalResults);
    setPage(page);
  };

  useEffect(() => {
    fetchPosts(page);
  }, []);

  const handlePrev = () => {
    fetchPosts(page - 1);
  };

  const handleNext = () => {
    fetchPosts(page + 1);
  };

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <p>{post.title}</p>
          </div>
        );
      })}
      <button disabled={page <= 1} onClick={handlePrev}>
        Prev
      </button>
      <button
        disabled={page + 1 > Math.ceil(totalResults / pageSize)}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Posts;

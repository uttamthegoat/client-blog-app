import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPosts = async (page) => {
    const response = await axios.get(`/posts?page=${page}&pageSize=1`);
    const data = response.data;
    setPosts(data.results);
    setTotalPages(data.totalPages);
    setPage(page);
    // console.log(data);
    // console.log(data.totalPages);
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
        disabled={page + 1 > Math.ceil(totalPages / 1)}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Posts;

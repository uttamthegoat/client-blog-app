import axios from "../utils/axiosConfig";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("No user");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchUser = () => {
      axios
        .get("/auth/getUserDetails")
        .then((res) => {
          setUser(res.data.user.name);
          setBio(res.data.user.bio);
        })
        .catch((error) => {
          if (error.response.data.status === "logout") navigate("/auth");
        });
    };
    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("/auth/profile-update", {
        bio: bio,
      })
      .then((res) => {
        setBio(res.data.user.bio);
      })
      .catch((error) => {
        const { status } = error.response.data;
        if (status === "logout") navigate("/auth");
      });
  };

  return (
    <div>
      <p>Name: {user}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bio"
          id="bio"
          placeholder="Enter Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Home;

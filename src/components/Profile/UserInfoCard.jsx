import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { getUser_apiCall } from "./apiCall";
import { useNavigate } from "react-router-dom";
import SocialLinks from "../static/SocialLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UserInfoTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  React.useEffect(() => {
    getUser_apiCall(navigate, dispatch);
  }, []);

  return (
    <div className="shadow-2xl w-10/12 mx-auto flex flex-col bg-white rounded-lg md:flex-row dark:border-gray-700 dark:bg-blue-400">
      <LazyLoadImage
        className="object-cover w-full rounded-t-lg h-96 sm:w-[300px] sm:h-auto sm:pt-4 md:pt-0 md:h-auto md:w-[400px] md:rounded-none md:rounded-l-lg sm:mx-auto"
        src={userInfo.image}
        alt=""
      />
      <div className="flex flex-col  flex-grow items-start justify-start p-4 leading-normal min-h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          Name: {userInfo.name}
        </h5>
        <p className="mb-3 text-black font-semibold">
          E-mail: {userInfo.email}
        </p>
        <p className="mb-2 text-black font-semibold">
          Bio:
          {userInfo.bio}
        </p>
        <SocialLinks heading="My Social Media" />
      </div>
    </div>
  );
};

export default UserInfoTab;

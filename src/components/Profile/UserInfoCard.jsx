import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, getUser } from "../../features/user/userSlice";
import axios from "../../utils/axiosConfig";

const UserInfoTab = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  React.useEffect(() => {
    axios
      .get("/auth/getUserDetails")
      .then((res) => {
        const user = res.data.user;
        dispatch(getUser({user}));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="shadow-2xl w-10/12 mx-auto flex flex-col items-center bg-white rounded-lg md:flex-row dark:border-gray-700 dark:bg-blue-400">
      <img
        className="object-cover w-full rounded-t-lg h-96 sm:w-[300px] sm:h-auto sm:pt-4 md:pt-0 md:h-auto md:w-[400px] md:rounded-none md:rounded-l-lg"
        src={user.image}
        alt=""
      />
      <div className="flex flex-col items-start p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          Name: {user.name}
        </h5>
        <p className="mb-3 text-black font-semibold">E-mail: {user.email}</p>
        <p className="mb-2 text-black font-semibold">
          Bio:
          {user.bio}
        </p>
      </div>
    </div>
  );
};

export default UserInfoTab;

import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";


export const getUser_apiCall = async (navigate, dispatch) => {
    try {
      const res = await axios.get("/auth/getUserDetails");
      const { _id, ...user } = res.data.user;
      dispatch(getUser({ user }));
    } catch (error) {
      if (error.response.data.status === "logout") {
        const message = error.response.data.message,
          type = "error";
        dispatch(showAlert({ message, type }));
        navigate("/auth");
      }
    }
  };
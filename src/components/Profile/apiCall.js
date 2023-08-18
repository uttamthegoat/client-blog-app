import axios from "../../utils/axiosConfig";
import {
  getUser,
  changeImage,
  updateUserInfo,
} from "../../features/user/userSlice";
import {
  addSocialMedia,
  getSocialMedia,
} from "../../features/social-media/socialMediaSlice";
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

export const imageChange_apiCall = async (navigate, dispatch, formData) => {
  try {
    const res = await axios.post("/image/image-upload-user", formData);
    const { image } = res.data;
    dispatch(changeImage({ image }));
    const message = res.data.message,
      type = "success";
    dispatch(showAlert({ message, type }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      navigate("/auth");
    }
  }
};

export const handleUserInfoUpdate = async (navigate, dispatch, userDetails) => {
  try {
    const { email, ...rest } = userDetails;
    const res = await axios.put("/auth/profile-update", rest);
    const { bio, name } = res.data.user;
    dispatch(updateUserInfo({ name, bio }));
    const message = res.data.message,
      type = "success";
    dispatch(showAlert({ message, type }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      navigate("/auth");
    }
  }
};

export const get_SocialMedia = async (setUserLink, navigate, dispatch) => {
  try {
    const res = await axios.get("/social-media/get-social-media");
    const { _id, ...socialMedia } = res.data.socialMedia;
    dispatch(getSocialMedia({ socialMedia }));
    setUserLink(socialMedia);
  } catch (error) {
    console.log(error);
  }
};

export const update_SocialMedia = async (navigate, dispatch, user_Links) => {
  try {
    const res = await axios.put("/social-media/add-social-media", user_Links);
    dispatch(addSocialMedia(user_Links));
    const message = res.data.message,
      type = "success";
    dispatch(showAlert({ message, type }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      navigate("/auth");
    }
  }
};

export const getUser_toEdit = async (navigate, setUserDetails) => {
  try {
    const res = await axios.get("/auth/getUserDetails");
    const { _id, image, ...user } = res.data.user;
    setUserDetails(user);
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/auth");
  }
};

export const getUserPosts = async (navigate, dispatch, setMyPosts) => {
  try {
    const res = await axios.get("/posts/my-posts");
    const { results, totalResults } = res.data;
    setMyPosts({ results, totalResults });
    console.log();
  } catch (error) {
    console.log(error);
    const message = error.response.data.message,
      type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") navigate("/auth");
  }
};

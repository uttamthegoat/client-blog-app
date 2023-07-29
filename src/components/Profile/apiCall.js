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

export const getUser_apiCall = async (navigate, dispatch) => {
  try {
    const res = await axios.get("/auth/getUserDetails");
    const { _id, ...user } = res.data.user;
    dispatch(getUser({ user }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const imageChange_apiCall = async (navigate, dispatch, formData) => {
  try {
    const res = await axios.post("/image/image-upload", formData);
    const { image } = res.data;
    dispatch(changeImage({ image }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const handleUserInfoUpdate = async (navigate, dispatch, userDetails) => {
  try {
    const { email,...rest } = userDetails;
    const res = await axios.put("/auth/profile-update", rest);
    const { bio, name } = res.data.user;
    dispatch(updateUserInfo({ name, bio }));
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
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
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const update_SocialMedia = async (navigate, dispatch, user_Links) => {
  try {
    const res = await axios.put("/social-media/add-social-media", user_Links);
    dispatch(addSocialMedia(user_Links));
    console.log(res.data.message);
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

export const getUser_toEdit = async (navigate, setUserDetails) => {
  try {
    const res = await axios.get("/auth/getUserDetails");
    const { _id, image, ...user } = res.data.user;
    setUserDetails(user);
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "logout") navigate("/");
  }
};

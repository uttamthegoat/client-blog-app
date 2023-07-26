import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  name: "",
  email: "",
  bio: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeImage: (state, action) => {
      const { image } = action.payload;
      return { ...state, image };
    },
    getUser: (state, action) => {
      const { user } = action.payload;
      return user;
    },
    updateUserInfo: (state, action) => {
      const { bio, name } = action.payload;
      return { ...state, name, bio };
    },
    setUserInfo: (state, action) => {
      const { name, bio } = action.payload;
      return { ...state, name, bio };
    },
  },
});

export const selectUser = (state) => state.user;
export const selectImage = (state) => state.user.image;
export const selectName = (state) => state.user.name;
export const selectBio = (state) => state.user.bio;

export const {
  changeImage,
  getUser,
  updateUserInfo,
  setUserInfo,
} = userSlice.actions;

export default userSlice.reducer;

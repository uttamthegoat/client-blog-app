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
  },
});

export const selectImage = (state) => state.user.image;
export const selectUser = (state) => state.user;

export const { changeImage, getUser } = userSlice.actions;

export default userSlice.reducer;

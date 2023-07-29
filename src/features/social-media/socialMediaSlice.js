import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instagram: "",
  facebook: "",
  twitter: "",
  linkedin: "",
};

const socialMediaUser = createSlice({
  name: "socialMedia",
  initialState,
  reducers: {
    getSocialMedia: (state, action) => {
      const { instagram, facebook, twitter, linkedin } =
        action.payload.socialMedia;
      return { ...state, instagram, facebook, twitter, linkedin };
    },
    addSocialMedia: (state, action) => {
      const { instagram, facebook, twitter, linkedin } = action.payload;
      return { ...state, instagram, facebook, twitter, linkedin };
    },
  },
});

export const selectLinks = (state) => state.socialMedia;

export const { getSocialMedia, addSocialMedia } = socialMediaUser.actions;

export default socialMediaUser.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import socialMediaReducer from "../features/social-media/socialMediaSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    socialMedia: socialMediaReducer,
  },
});

export default store;

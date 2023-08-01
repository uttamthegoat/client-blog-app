import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import socialMediaReducer from "../features/social-media/socialMediaSlice";
import alertReducer from "../features/alert/alertSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    socialMedia: socialMediaReducer,
    alert: alertReducer,
  },
});

export default store;

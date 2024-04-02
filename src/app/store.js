import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers";

const store=configureStore({reducer:todoSlice}) //creating store with reducers todoSlice that is created in reducers.js
export default store
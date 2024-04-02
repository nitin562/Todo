import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers";

const store=configureStore({reducer:todoSlice})
export default store
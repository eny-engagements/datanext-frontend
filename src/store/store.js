import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux"; // Added useSelector to import

export const store = configureStore({
  reducer: {
    // your reducers here
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
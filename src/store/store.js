import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // your reducers here
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./redux-toolkit/slice/adoptedPetSlice";
import searchParams from "./redux-toolkit/slice/searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
  },
  enhancers: {},
});

export default store;

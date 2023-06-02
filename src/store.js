import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./redux-toolkit/slice/adoptedPetSlice";
import searchParams from "./redux-toolkit/slice/searchParamsSlice";
import { petApi } from "./redux-toolkit/service/petApiService";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
  enhancers: {},
});

export default store;

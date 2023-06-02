import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./redux-toolkit/slice/adoptedPetSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import ModalEditNameReducer from "../Slice/modalEditNameSlice";

const rootReducer = {
  auth: authReducer,
  EditName: ModalEditNameReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

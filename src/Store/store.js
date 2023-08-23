import { configureStore } from "@reduxjs/toolkit";
import modalSignUpReducer from "../Slice/modalSignUpSlice";
import authReducer from "../Slice/authSlice";
import ModalEditNameReducer from "../Slice/modalEditNameSlice";

const rootReducer = {
  SignUp: modalSignUpReducer,
  auth: authReducer,
  EditName: ModalEditNameReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

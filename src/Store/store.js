import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../Slice/modalSlice'
import authReducer from '../Slice/authSlice';


const rootReducer = {
  modal: modalReducer,
  auth: authReducer,
  
  
};

const store = configureStore({
  reducer: rootReducer,
 
});

export default store;











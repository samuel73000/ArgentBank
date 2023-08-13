// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../Slice/modalSlice'
import authReducer from '../Slice/authSlice';

const rootReducer = {
  modal: modalReducer,
  auth: authReducer,
  // Vous pouvez ajouter d'autres réducteurs ici si nécessaire
};

const store = configureStore({
  reducer: rootReducer,
  // D'autres options de configuration si nécessaire
});

export default store;
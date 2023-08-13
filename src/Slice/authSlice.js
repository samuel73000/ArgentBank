// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
    loginMessage: '',
    email: '',
    password: '',
    isLoggedIn: false, 
    
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setLoginMessage: (state, action) => {
      state.loginMessage = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    clearAuthData: state => {
      state.isLoggedIn = false;
      state.authToken = null;
      // Réinitialisez d'autres propriétés d'état liées à l'authentification si nécessaire
    },
  },
});

export const { setAuthToken, setLoginMessage , setEmail, setPassword , setIsLoggedIn ,clearAuthData } = authSlice.actions;
export default authSlice.reducer;

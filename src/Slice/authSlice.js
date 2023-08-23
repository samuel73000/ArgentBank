import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
    loginMessage: '',
    isLoggedIn: false, 
    rememberMe: false,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setLoginMessage: (state, action) => {
      state.loginMessage = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    clearAuthData: state => {
      state.isLoggedIn = false;
      state.authToken = null;
      state.rememberMe = false;
      // Réinitialisez d'autres propriétés d'état liées à l'authentification si nécessaire
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
});

export const { setAuthToken, setLoginMessage  , setIsLoggedIn ,clearAuthData , setIsModalOpen , setRememberMe,} = authSlice.actions;
export default authSlice.reducer;

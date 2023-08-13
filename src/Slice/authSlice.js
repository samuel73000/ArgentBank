import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
    loginMessage: '',
    emailSignIn: '',
    passwordSignIn: '',
    isLoggedIn: false, 
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setLoginMessage: (state, action) => {
      state.loginMessage = action.payload;
    },
    setEmailSignIn: (state, action) => {
      state.emailSignIn = action.payload;
    },
    setPasswordSignIn: (state, action) => {
      state.passwordSignIn = action.payload;
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

export const { setAuthToken, setLoginMessage , setEmailSignIn, setPasswordSignIn , setIsLoggedIn ,clearAuthData , setIsModalOpen } = authSlice.actions;
export default authSlice.reducer;

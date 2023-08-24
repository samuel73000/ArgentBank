import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: null,
    isLoggedIn: false,
    rememberMe: false,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    clearAuthData: (state) => {
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

export const { setAuthToken, setIsLoggedIn, clearAuthData, setRememberMe } =
  authSlice.actions;
export default authSlice.reducer;

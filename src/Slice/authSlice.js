import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: null,
    isLoggedIn: false,
    rememberMe: false,
  },
  reducers: {
    //stocke le token
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    //stocke l'etat de connexion
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    clearAuthData: (state) => {
      state.isLoggedIn = false;
      state.authToken = null;
      state.rememberMe = false;
      // Réinitialisez d'autres propriétés d'état liées à l'authentification si nécessaire
    },  
    //stocke si il a cocher la case remember me 
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    
  },
});

export const { setAuthToken, setIsLoggedIn, clearAuthData, setRememberMe } =
  authSlice.actions;
export default authSlice.reducer;

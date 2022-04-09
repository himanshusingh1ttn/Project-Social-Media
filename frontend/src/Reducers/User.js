import { createReducer } from "@reduxjs/toolkit";
const initialState ={};




export const userReducer = createReducer(initialState, {

    LoginRequest: (state, action) => {
        state.isLoading = true;
    
    },
    LoginSuccess: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoginFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    RegisterRequest: (state, action) => {
        state.isLoading = true;
    
    },
    RegisterSuccess: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    LoadUser: (state, action) => {
        state.isLoading = true;
    
    },
    LoadUserSuccess: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadUserFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    clearErrors: (state, action) => {
        state.error = null;
    },
});

export const postOfFriendsReducer = createReducer({},{
    postOfFriendsRequest: (state) => {
        state.loading = true;
    
    },
    postOfFriendsSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
    },
    postOfFriendsFailure: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
    },
    clearErrors: (state, action) => {
        state.error = null;
    },
});

export const allUsersReducer = createReducer(initialState, {
    allUsersRequest: (state) => {
      state.loading = true;
    },
    allUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    allUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });
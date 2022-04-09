
   
import { configureStore } from "@reduxjs/toolkit";
import { userReducer,postOfFriendsReducer, allUsersReducer, } from "./Reducers/User";
import { likeReducer } from "./Reducers/Post";
const store = configureStore(   {
    reducer:{
        user:userReducer,
        postOfFriends:postOfFriendsReducer,
        allUsers:allUsersReducer,
        like:likeReducer,
    }
});
export default store;


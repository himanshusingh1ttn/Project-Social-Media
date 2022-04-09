
   
import { configureStore } from "@reduxjs/toolkit";
import { userReducer,postOfFriendsReducer, allUsersReducer, } from "./Reducers/User";

const store = configureStore(   {
    reducer:{
        user:userReducer,
        postOfFriends:postOfFriendsReducer,
        allUsers:allUsersReducer,
    }
});
export default store;


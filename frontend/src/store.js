
   
import { configureStore } from "@reduxjs/toolkit";
import { userReducer,postOfFriendsReducer, allUsersReducer, } from "./Reducers/User";
import { likeReducer , myPostsReducer} from "./Reducers/Post";
const store = configureStore(   {
    reducer:{
        user:userReducer,
        postOfFriends:postOfFriendsReducer,
        allUsers:allUsersReducer,
        like:likeReducer,
        myPosts:myPostsReducer,
    }
});
export default store;


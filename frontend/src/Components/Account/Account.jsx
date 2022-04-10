import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMyProfile, getMyPosts, logoutUser } from "../../Actions/User";
import Loader from "../Loader/Loader";
import Post from "../Post/Post";
import User from "../User/User";
import "./Account.css";
const Account = () => {
  const dispatch = useDispatch();
  const {user,loading:userLoading} = useSelector((state) => state.user);
  const {loading,error,posts} = useSelector(state => state.myPosts);
  const {error:likeError,message} = useSelector((state)=>state.like);
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, likeError, dispatch]);
  
  return loading===true|| userLoading===true?<Loader/>: (
    <div className="account">
    <div className="accountleft">
    {
              posts && posts.length>0 ?posts.map((post)=>(
                <Post 
                 key={post._id}
                 postImage={"http://www.outdoor-photos.com/_photo/2851582.jpg"} 
                
                // postId={post._id}
                caption={post.caption}
                 //postImage={post.image.url}
                 likes={post.likes}
                // comments={post.comments}
                 ownerImage={post.owner.avatar}
                 ownerName={post.owner.name}
                // ownerId={post.owner._id}
              />
              )):<Typography variant='h6'>No posts to show</Typography>
            }
    </div>
    <div className="accountright">
    
    
        <Avatar
          src={user.avatar} //user.avatar.url
          sx={{ height: "8vmax", width: "8vmax" }}
        />
        
        <Typography variant="h5">{user.name}</Typography>  
        <div>
          <button>
            <Typography>Friends</Typography>
          </button>
          <Typography>{user.friends.length}</Typography>
        </div>
        <div>
          
            <Typography>Posts</Typography>
          
          <Typography>{user.posts.length}</Typography>
        </div>
        <Button variant="contained">Logout</Button>
        <Link to ="/update/profile">Edit Profile</Link>
        <Link to ="/update/password">Change Password</Link>
        <Button variant="text" style={{color:"red",margin:"2vmax"}}>
          Delete My Profile
        </Button>
       </div>
    </div>
   );
  
}

export default Account
import { Avatar,Dialog } from '@mui/material';
import React ,{useEffect, useState} from "react";
import {
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
  } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { Typography , Button} from '@mui/material';
import { useDispatch,useSelector} from 'react-redux';
import "./Post.css";
import { addCommentOnPost, likePost } from '../../Actions/Post';
import { getFriendsPosts } from '../../Actions/User';
import User from "../User/User";
import CommentCard from "../CommentCard/CommentCard";




const Post = ({
    postId,
    caption,
    postImage,
    likes = [],
    comments = [],
    ownerImage,
    ownerName,
    ownerId,
    isDelete = false,
    isAccount = false,

}) => {
    const [liked, setLiked] = React.useState(false);
    const[likesUser,setLikesUser] = useState(false);
    const[commentValue, setCommentValue] = useState("");
    const [commentToggle, setCommentToggle] = useState(false);
    
    const dispatch = useDispatch();
     
    const {user} = useSelector((state) => state.user);

    const handleLike = async() =>{
        setLiked(!liked);
        //api request
       await dispatch(likePost(postId));
        //for uodating the likes
        if(isAccount){
           console.log("my account post");
        }else{
          dispatch(getFriendsPosts());
        }
        
    }
    const addCommentHandler = async (e) => {
      e.preventDefault();
      await  dispatch(addCommentOnPost(postId, commentValue));
       if(isAccount){
       console.log("my account post");
     }else{
       dispatch(getFriendsPosts());
     }

      };
    useEffect(() => {
     likes.forEach((item)=>{
       if(item._id===user._id){
         setLiked(true);
       }
     })
    }, [likes,user._id]);
    
  
    
  return (
    <div className="post">
      <div className="postHeader">

       {isAccount?<Button>
           <MoreVert/>
       </Button>:null}


      </div>
      <img src={postImage} alt="Post" />

      <div className="postDetails">
        <Avatar
          src={ownerImage}
          alt="User"
          sx={{
            height: "3vmax",
            width: "3vmax",
          }}
        />

        <Link to={`/user/${ownerId}`}>
          <Typography fontWeight={700}>{ownerName}</Typography>
        </Link>

        <Typography
          fontWeight={100}
          color="rgba(0, 0, 0, 0.582)"
          style={{ alignSelf: "center" }}
        >
          {caption}
        </Typography>
      </div>
      <button
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}
        onClick={() => setLikesUser(!likesUser)}
        disabled={likes.length === 0 ? true : false}
      >
        <Typography>{likes.length} Likes</Typography>
      </button>
      <div className="postFooter">
       <Button onClick={handleLike}>
           {
               liked?<Favorite style={{color:"red"}}/>:<FavoriteBorder/>
           }
           
       </Button>
       
       <Button onClick={()=>setCommentToggle(!commentToggle)}> 
           <ChatBubbleOutline/>
       </Button>

       <Button>
           {
               isDelete?(<Button><DeleteOutline/></Button>):null
           }
       </Button>
        </div>

      <Dialog open={likesUser} onClose={()=>setLikesUser(!likesUser)}>
        <div className="DialogBox">
          <Typography variant ="h4">
            Liked By 
            </Typography>
            {likes.map(like=>(               
            <User 
                key={like._id}
                userId={like._id}
                name={like.name}
                avatar={"http://www.outdoor-photos.com/_photo/2851582.jpg"}//update later using cloudinary
              />
            ))
            }
       
        </div>
      </Dialog>
      
    
      <Dialog open={commentToggle} onClose={()=>setCommentToggle(!commentToggle)}>
        <div className="DialogBox">
          <Typography variant ="h4">Comments</Typography>
           <form className="commentForm" onSubmit={addCommentHandler}>
             <input  type="text" value={commentValue} onChange={(e)=>setCommentValue(e.target.value)}
             placeholder="Add Comment" 
             required
             
             />
               <Button type="submit" variant="contained">
              Add
            </Button>

            </form>
             
            {
                        comments.length > 0 ? comments.map((item) => (
                            <CommentCard
                            key={item._id}
                            userId={item.user._id} name={item.user.name} avatar={item.user.avatar} comment={item.comment} commentId={item._id} isAccount={isAccount}
                            postId={postId} />
                        )) : <Typography>No Comment Yet</Typography>
            }

           </div>
      </Dialog>
    </div>
     
  )
}

export default Post


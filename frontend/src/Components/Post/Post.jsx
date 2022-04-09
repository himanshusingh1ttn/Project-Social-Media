import { Avatar } from '@mui/material';
import React from 'react'
import {
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
  } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { Typography , Button} from '@mui/material';
import "./Post.css";
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
    const handleLike = () =>{
        setLiked(!liked);
        //api request
    }
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
        // onClick={() => setLikesUser(!likesUser)}
        // disabled={likes.length === 0 ? true : false}
      >
        <Typography>{likes.length} Likes</Typography>
      </button>
      <div className="postFooter">
       <Button onClick={handleLike}>
           {
               liked?<Favorite style={{color:"red"}}/>:<FavoriteBorder/>
           }
           
       </Button>
       <Button>
           <ChatBubbleOutline/>
       </Button>
       <Button>
           {
               isDelete?(<Button><DeleteOutline/></Button>):null
           }
       </Button>
      </div>
      </div>
     
  )
}

export default Post


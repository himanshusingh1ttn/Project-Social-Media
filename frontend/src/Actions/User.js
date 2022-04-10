import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "/api/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
  
      const { data } = await axios.get("/api/me");
  
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoadUserFailure",
        payload: error.response.data.message,
      });
    }
  };
  export const getFriendsPosts = () => async (dispatch) => 
  {
    try {
      dispatch({
        type: "postOfFriendsRequest",
      });
  
      const { data } = await axios.get("/api/posts");
  
      dispatch({
        type: "postOfFriendsSuccess",
        payload: data.posts,
      });
    } catch (error) {
      dispatch({
        type: "postOfFriendsFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const getAllUsers =
  () =>
  async (dispatch) => {
    try {
      dispatch({
        type: "allUsersRequest",
      });

      const { data } = await axios.get("/api/users");
      dispatch({
        type: "allUsersSuccess",
        payload: data.users,
      });
    } catch (error) {
      dispatch({
        type: "allUsersFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const getMyPosts = () => async (dispatch) => 
  {
    try {
      dispatch({
        type: "myPostsRequest",
      });
  
      const { data } = await axios.get("/api/my/posts");
  
      dispatch({
        type: "myPostsSuccess",
        payload: data.posts,
      });
    } catch (error) {
      dispatch({
        type: "myPostsFailure",
        payload: error.response.data.message,
      });
    }
  };
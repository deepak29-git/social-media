import axios from "axios";
import { getToken } from "../Utility/get-token";
import {likePost,dislikePost} from '.././redux/features/posts/postSlice'
 const likePostApi = async (postId, dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/posts/like/${postId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    dispatch(likePost(data.posts));
    
  } catch (error) {
    console.log(error);
  }
};
 const dislikePostApi = async (postId, dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/posts/dislike/${postId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    dispatch(dislikePost(data.posts));
  } catch (error) {
    console.log(error);
  }
};

export {likePostApi,dislikePostApi}
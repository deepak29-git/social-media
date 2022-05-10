import axios from "axios";
import { getToken } from "../Utility/get-token";

 const likePostApi = async (postId, postDispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/posts/like/${postId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    postDispatch({ type: "LIKE_POST", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};
 const dislikePostApi = async (postId, postDispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/posts/dislike/${postId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    postDispatch({ type: "DISLIKE_POST", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};

export {likePostApi,dislikePostApi}
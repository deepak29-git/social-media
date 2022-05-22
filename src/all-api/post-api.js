import axios from "axios";
import { getToken } from "../Utility/get-token";
import {getPosts,getCreatePost,editPost,deletePost, postInputValue} from '../redux/features/posts/postSlice'
const getPost = async (dispatch, setLoader) => {
  try {
    setLoader(true);
    const { data } = await axios.get("/api/posts");
    setLoader(false);
    dispatch(getPosts(data.posts));
  } catch (error) {
    console.log(error);
  }
};

const createPostApi = async (dispatch, post, userData) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "/api/posts",
      data: { postData: post, username: userData.username },
      headers: {
        authorization: getToken(),
      },
    });
    dispatch(getCreatePost(data.posts));
  } catch (error) {
    console.log(error);
  }
};

const editPostApi = async (dispatch, _id, postData) => {
  try {
    const { data } = await axios.post(
      `/api/posts/edit/${_id}`,
      {
        postData: postData,
      },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );

    dispatch(editPost(data.posts));
  } catch (error) {
    console.log(error);
  }
};

const deletePostApi = async (id, dispatch) => {
  try{
    const { data } = await axios({
      method: "DELETE",
      url: `/api/posts/${id}`,
      headers: { authorization: getToken() },
    });
  
    dispatch(deletePost(data.posts));
  }catch(error){
    console.log(error)
  }
  
};

export { getPost, createPostApi, editPostApi, deletePostApi };

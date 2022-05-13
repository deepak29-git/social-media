import axios from "axios";
import { getToken } from "../Utility/get-token";
const getPost = async (postDispatch) => {
  try {
    const { data } = await axios.get("/api/posts");
    postDispatch({ type: "GET_POST", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};

const createPostApi = async (postDispatch, post) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "/api/posts",
      data: { postData: post },
      headers: {
        authorization: getToken(),
      },
    });
    postDispatch({ type: "CREATE_POST", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};

const editPostApi = async (postDispatch, _id, postData) => {
  try {
    const { data } = await axios.post(
      `/api/posts/edit/${_id}`,
      {
        postData:postData,
      },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );

    postDispatch({ type: "EDIT_POST", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};

const deletePostApi = async (id, postDispatch) => {
  const { data } = await axios({
    method: "DELETE",
    url: `/api/posts/${id}`,
    headers: { authorization: getToken() },
  });

  postDispatch({ type: "DELETE_POST", payload: data.posts });
};

export { getPost, createPostApi, editPostApi, deletePostApi };

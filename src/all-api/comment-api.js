import axios from "axios";
import { getToken } from "../Utility/get-token";

const getComments = async (postId, setComments) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `/api/comments/${postId}`,
    });
    setComments(data.comments);
  } catch (error) {
    console.log(error);
  }
};

const addCommentApi = async (postId, commentInput, userData, setComments) => {
  console.log(userData.username)
  try {
    const { data } = await axios.post(
      `/api/comments/add/${postId}`,
      { content: commentInput, username: userData.username },
      { headers: { authorization: getToken() } }
    );
    setComments(data.comments);
  } catch (error) {
    console.log(error);
  }
};

const editCommentApi = async (
  commentId,
  postId,
  commentInput,
  userData,
  setComments
) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/comments/edit/${postId}/${commentId}`,
      data: { content: commentInput, username: userData.userName },
      headers: { authorization: getToken() },
    });
    setComments(data.comments);
  } catch (error) {
    console.log(error);
  }
};

const deleteCommentApi = async (commentId, postId, setComments) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/comments/delete/${postId}/${commentId}`,
      headers: { authorization: getToken() },
    });
    setComments(data.comments);
  } catch (error) {
    console.log(error);
  }
};

const upvoteCommentApi = async (commentId, postId, setComments) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/comments/upvote/${postId}/${commentId}`,
      headers: { authorization: getToken() },
    });
    setComments(data.comments);
  } catch (error) {
    console.log(error);
  }
};

const downvoteCommentApi = async (commentId, postId, setComments) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/comments/downvote/${postId}/${commentId}`,
      headers: { authorization: getToken() },
    });
    setComments(data.comments);
  } catch (error) {
    console.log(error);
  }
};

export {
  getComments,
  addCommentApi,
  editCommentApi,
  deleteCommentApi,
  upvoteCommentApi,
  downvoteCommentApi,
};

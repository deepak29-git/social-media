import axios from "axios";
import { getToken } from "../Utility/get-token";
const getPost = async (setPost) => {
  try {
    const { data } = await axios.get("/api/posts");
    setPost(data.posts);
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
  console.log(postDispatch,"dispatch", _id,"id", postData,"input")
  try {
    const {data}=await axios.post(`/api/posts/edit/${_id}`,
    {
      postData
    },
    {
      headers:{
        authorization:getToken()
      }
    }
    )
   
    postDispatch({type:"EDIT_POST",payload:data.posts})
  } catch (error) {
    console.log(error);
  }
};

const deletePostApi=async(id,postDispatch)=>{
  const {data}=await axios({
    method:"DELETE",
    url:`/api/posts/${id}`,
    headers:{authorization:getToken()}
  })
  
  postDispatch({type:"DELETE_POST",payload:data.posts})
}

export { getPost, createPostApi, editPostApi,deletePostApi };

import axios from "axios";
import { getToken } from "../Utility/get-token";

const addCommentApi = async ( postId, commentInput) => {
console.log(getToken())
console.log(postId)
console.log(commentInput)
  try {
      // const {data}=await axios.post(`/api/comments/add/${postId}`,
      // {
      //   commentData:commentInput
      // },
      // {
      //     headers:{
      //         authorization:getToken()
      //     }
      // }
      // )
    const { data } = await axios({
      method: "POST",
      url: `/api/comments/add/${postId}`,
      data: {commentData: {id:postId,text:commentInput} },
      headers: { authorization: getToken() },
    });
    console.log(data);
  } catch (error) {
      console.log(error)
  }
};

export { addCommentApi };

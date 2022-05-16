import axios from "axios"
import { getToken } from "../Utility/get-token"

const addToBookmarkApi=async(postId,postDispatch,toast)=>{
    try{
        const {data}=await axios({
            method:"POST",
            url:`/api/users/bookmark/${postId}`,
            headers:{authorization:getToken()}
        })
        postDispatch({type:"BOOKMARK_POST",payload:data.bookmarks})
        toast({
            title: "Added to bookmark.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
    }catch(error){
        console.log(error)
    }
}

const removePostFromBookmarkApi=async(postId,postDispatch,toast)=>{
    try{
        const {data}=await axios({
            method:"POST",
            url:`/api/users/remove-bookmark/${postId}`,
            headers:{authorization:getToken()}
        })
        postDispatch({type:"REMOVE_BOOKMARK_POST",payload:data.bookmarks})
        toast({
            title: "Removed from bookmark.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
    }catch(error){
        console.log(error)
    }
}
const getBookmark=async(postDispatch)=>{
    try{
        const {data}=await axios({
            method:"GET",
            url:"/api/users/bookmark",
            headers:{authorization:getToken()}
        })
        postDispatch({type:"GET_BOOKMARK",payload:data.bookmarks})
    }catch(error){
        console.log(error)
    }
}
export {addToBookmarkApi,removePostFromBookmarkApi,getBookmark}
import axios from "axios"
import { getToken } from "../Utility/get-token"
import {addToBookmark,removeFromBookmark,getBookmark} from '../redux/features/posts/postSlice'
const addToBookmarkApi=async(postId,dispatch,toast)=>{
    try{
        const {data}=await axios({
            method:"POST",
            url:`/api/users/bookmark/${postId}`,
            headers:{authorization:getToken()}
        })
        dispatch(addToBookmark(data.bookmarks))
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

const removePostFromBookmarkApi=async(postId,dispatch,toast)=>{
    try{
        const {data}=await axios({
            method:"POST",
            url:`/api/users/remove-bookmark/${postId}`,
            headers:{authorization:getToken()}
        })
        dispatch(removeFromBookmark(data.bookmarks))
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
const getBookmarkApi=async(dispatch)=>{
    try{
        const {data}=await axios({
            method:"GET",
            url:"/api/users/bookmark",
            headers:{authorization:getToken()}
        })
        dispatch(getBookmark(data.bookmarks))
    }catch(error){
        console.log(error)
    }
}
export {addToBookmarkApi,removePostFromBookmarkApi,getBookmarkApi}
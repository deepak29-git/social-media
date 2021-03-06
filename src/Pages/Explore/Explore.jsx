import { Box,Image } from "@chakra-ui/react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useEffect, useState } from "react";
import { getPost } from "../../all-api/post-api";
import { useLoader } from "../../Custom-hook/loader";
import loading from '../../assets/gif/loading.gif'
import { useDispatch, useSelector } from "react-redux";
export const Explore = () => {
    const dispatch=useDispatch()
    const {createPost}=useSelector((state)=>state.posts)
    const {loader,setLoader}=useLoader()
    useEffect(() => {
        getPost(dispatch,setLoader);
      }, []);
    
  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>
      {loader&&
        <Box display="flex"  justifyContent="center" alignItems="center" height="100vh">
        <Image src={loading} boxSize="100px" alt="loading"/>
        </Box>
        }
      {createPost.map((post) => (
          <PostCard key={post._id} post={post} />
          ))}
      </Box>
      <RightSidebar/>
    </Box>
  );
};

import { Box,Image } from "@chakra-ui/react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { usePost } from "../../Context/post-context";
import { PostCard } from "../../Components/PostCard/PostCard";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useEffect, useState } from "react";
import { getPost } from "../../all-api/post-api";
import { useLoader } from "../../Custom-hook/loader";
import loading from '../../assets/gif/loading.gif'
import { useUser } from "../../Context/user-context";
export const Explore = () => {
    const {postState:{createPost},postDispatch}=usePost();
    const {userState:{followUser}}=useUser()
    const {loader,setLoader}=useLoader()
    const [filteredPost,setFilteredPost]=useState([])
    useEffect(() => {
        getPost(postDispatch,setLoader);
      }, []);
      
      useEffect(()=>{
        const exploreFeedPost=createPost.filter(post=>post.username!==followUser.userName)
        setFilteredPost(exploreFeedPost)
      },[])

  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>
      {loader&&
        <Box display="flex"  justifyContent="center" alignItems="center" height="100vh">
        <Image src={loading} boxSize="100px" alt="loading"/>
        </Box>
        }
      {filteredPost.map((post) => (
          <PostCard key={post._id} post={post} />
          ))}
      </Box>
      <RightSidebar/>
    </Box>
  );
};

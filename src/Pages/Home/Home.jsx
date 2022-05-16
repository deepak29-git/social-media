import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Box, Button,Image } from "@chakra-ui/react";
import { usePost } from "../../Context/post-context";
import { PostCard } from "../../Components/PostCard/PostCard";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useEffect, useState } from "react";
import { getPost } from "../../all-api/post-api";
import { useLoader } from "../../Custom-hook/loader";
import loading from '../../assets/gif/loading.gif'
import '../Home/Home.css'
export const Home = () => {
  const { postState, postDispatch } = usePost();
  const { createPost } = postState;
  const {loader,setLoader}=useLoader()

  useEffect(() => {
    getPost(postDispatch,setLoader);
  }, []);


  const sortByDateBtn=(value)=>{
    if(value==="date"){
      const sortedPostByDate=[...createPost].sort((a,b)=>b.createdAt.slice(7,10).split("-").join("")-a.createdAt.slice(7,10).split("-").join(""))
      const sortedPostByTime=[...createPost].sort((a,b)=>b.createdAt.slice(14,16).split(":").join("")-a.createdAt.slice(14,16).split(":").join(""))
      postDispatch({ type: "CREATE_POST", payload: sortedPostByDate });  
      postDispatch({ type: "CREATE_POST", payload: sortedPostByTime });  
    }else {
      postDispatch({ type: "CREATE_POST", payload: createPost });  
    }
  }

  const trendingBtn = (value) => {
    if (value === "trending") {
      const sortedPost = [...createPost].sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
      postDispatch({ type: "CREATE_POST", payload: sortedPost });
    } else {
      postDispatch({ type: "CREATE_POST", payload: createPost });
    }
  };
  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10} >
        <Box display="flex" gap="4" mb={4} position="sticky" top="80px" backgroundColor="#f3f2ef" zIndex="1">
        <Button
          onClick={() => trendingBtn("trending")}
          as="h4"
          size="md"
          variant="outline"
          colorScheme="teal"
          cursor="pointer"
          
          >
          Trending
        </Button>
        <Button
          onClick={() => sortByDateBtn("date")}
          as="h4"
          size="md"
          variant="outline"
          colorScheme="teal"
          cursor="pointer"
        
        >
          Sort by date
        </Button>
        </Box>
        {loader&&
        <Box display="flex"  justifyContent="center" alignItems="center" height="100vh">
        <Image src={loading} boxSize="100px" alt="loading"/>
        </Box>
        }
        
        {createPost.map((post) => (
          <PostCard key={post._id} post={post} />
          ))}
      </Box>
      <RightSidebar />
    </Box>
  );
};

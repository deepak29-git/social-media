import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";
import { usePost } from "../../Context/post-context";
import { PostCard } from "../../Components/PostCard/PostCard";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useEffect } from "react";
import { getPost } from "../../all-api/post-api";

export const Home = () => {
  const { postState, postDispatch } = usePost();
  const { createPost } = postState;

  useEffect(() => {
    getPost(postDispatch);
  }, []);

  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>
        {createPost.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </Box>
      <RightSidebar />
    </Box>
  );
};

import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Box, useDisclosure } from "@chakra-ui/react";
import { usePost } from "../../Context/post-context";
import { EditPostModal } from "../../Components/PostModal/EditPostModal";
import { PostCard } from "../../Components/PostCard/PostCard";
import { UserProfile } from "../../Components/UserProfile/UserProfile";
import { useEffect, useState } from "react";
import { getPost } from "../../all-api/post-api";

export const Home = () => {
  const { postState, postDispatch } = usePost();
  const { createPost } = postState;
  const { onClose, isOpen } = useDisclosure();

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
      <UserProfile />
    </Box>
  );
};

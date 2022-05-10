import { Sidebar } from "../../Components/Sidebar/Sidebar";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePost } from "../../Context/post-context";
import "../Home/Home.css";
import { EditPostModal } from "../../Components/PostModal/EditPostModal";
import { BsThreeDots } from "react-icons/bs";
import { deletePostApi, getPost } from "../../all-api/post-api";
import { dislikePostApi, likePostApi } from "../../all-api/like-dislike-post";
import { addToBookmarkApi } from "../../all-api/bookmark";
import { PostCard } from "../../Components/PostCard/PostCard";
export const Home = () => {
  const [post, setPost] = useState([]);
  const { postState, postDispatch } = usePost();
  const { createPost } = postState;
  const { onClose, isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    getPost(setPost);
  }, []);

  return (
    <Box className="grid-container">
      <Sidebar />
      <EditPostModal onClose={onClose} isOpen={isOpen} />
      {createPost.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      <Box className="right-sidebar-container">Profile</Box>
    </Box>
  );
};

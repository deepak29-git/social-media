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
import { deletePostApi, getPost } from "../../all-api/post-api";
import { usePost } from "../../Context/post-context";
import { BsThreeDots } from "react-icons/bs";
import "../Home/Home.css";
import { EditPostModal } from "../../Components/PostModal/EditPostModal";
import { dislikePostApi, likePostApi } from "../../all-api/like-dislike-post";
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
      {createPost.map(({ _id, content, likes }) => (
        <Box key={_id} className="post-container">
          <Box className="post-content" p={4}>
            <Box as="h4">UserName</Box>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsThreeDots />}
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  onClick={() => {
                    onOpen();
                    postDispatch({ type: "ID", payload: _id });
                  }}
                >
                  Edit post
                </MenuItem>
                <MenuItem onClick={() => deletePostApi(_id, postDispatch)}>
                  Delete post
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box as="hr"></Box>
          <Box p={4} as="p">
            {content}
          </Box>
          <Box as="hr"></Box>
          <Flex justifyContent="space-around" py={4}>
            <Flex
              onClick={() =>
                likes.likeCount >= 1
                  ? dislikePostApi(_id, postDispatch)
                  : likePostApi(_id, postDispatch)
              }
              alignItems="center"
              cursor="pointer"
              gap="1"
              className="post-icon"
            >
              {likes.likeCount >= 1 ? (
                <Box as="span" className="material-icons">
                  thumb_up
                </Box>
              ) : (
                <Box as="span" className="material-icons-outlined">
                  thumb_up{" "}
                </Box>
              )}

              <Box as="span">
                Like {likes.likeCount !== 0 && likes.likeCount}
              </Box>
            </Flex>

            <Flex
              className="post-icon"
              alignItems="center"
              gap="1"
              cursor="pointer"
            >
              <Box className="material-icons-outlined">comment </Box>
              <Box as="span">Comment</Box>
            </Flex>
            <Flex
              className="post-icon"
              alignItems="center"
              gap="1"
              cursor="pointer"
            >
              <Box className="material-icons-outlined">bookmark_border</Box>
              <Box as="span">Bookmark</Box>
            </Flex>
          </Flex>
        </Box>
      ))}
      <Box className="right-sidebar-container">Profile</Box>
    </Box>
  );
};

import "../../Pages/Home/Home.css";
import { BsThreeDots } from "react-icons/bs";
import { deletePostApi } from "../../all-api/post-api";
import { dislikePostApi, likePostApi } from "../../all-api/like-dislike-post";
import {CommentModal} from '../CommentModal/CommentModal'
import {
  addToBookmarkApi,
  removePostFromBookmarkApi,
} from "../../all-api/bookmark";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { usePost } from "../../Context/post-context";
import { EditPostModal } from "../PostModal/EditPostModal";

export const PostCard = ({ post }) => {
  const { postDispatch, postState } = usePost();
  const { bookmarkPost } = postState;
  const {onClose,isOpen, onOpen } = useDisclosure();
  const { _id, content, likes } = post;
  return (
    <Box className="post-container">
       <EditPostModal onClose={onClose} isOpen={isOpen} />
       <CommentModal onClose={onClose} isOpen={isOpen}/>
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

          <Box as="span">Like {likes.likeCount !== 0 && likes.likeCount}</Box>
        </Flex>

        <Flex
          className="post-icon"
          alignItems="center"
          gap="1"
          cursor="pointer"
          onClick={()=>{
            onOpen()
            postDispatch({ type: "ID", payload: _id });
          }}
        >
          <Box className="material-icons-outlined">comment </Box>
          <Box as="span">Comment</Box>
        </Flex>
        <Flex
          className="post-icon"
          alignItems="center"
          gap="1"
          cursor="pointer"
          onClick={() =>
            bookmarkPost.find((post) => post._id === _id)
              ? removePostFromBookmarkApi(_id, postDispatch)
              : addToBookmarkApi(_id, postDispatch)
          }
        >
          {bookmarkPost.find((post) => post._id === _id) ? (
            <span className="material-icons">bookmark</span>
          ) : (
            <Box className="material-icons-outlined">bookmark_border</Box>
          )}

          <Box as="span">Bookmark</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

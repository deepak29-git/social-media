import "../../Pages/Home/Home.css";
import { BsThreeDots } from "react-icons/bs";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { deletePostApi } from "../../all-api/post-api";
import { dislikePostApi, likePostApi } from "../../all-api/like-dislike-post";
import { CommentModal } from "../CommentModal/CommentModal";
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
  Avatar,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { EditPostModal } from "../PostModal/EditPostModal";
import { useEffect, useState } from "react";
import {
  deleteCommentApi,
  downvoteCommentApi,
  getComments,
  upvoteCommentApi,
} from "../../all-api/comment-api";
import { EditCommentModal } from "../CommentModal/EditCommentModal";
import { useDispatch, useSelector } from "react-redux";
import { getId, getCommentId } from "../../redux/features/posts/postSlice";
export const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { bookmarkPost } = useSelector((state) => state.posts);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditPost,setShowEditPost]=useState(false)
  const { onClose, isOpen, onOpen } = useDisclosure();
  const toast = useToast();
  const { _id, content, likes, username, userProfile } = post;
  const [comments, setComments] = useState([]);
  const postId = _id;
  useEffect(() => {
    getComments(_id, setComments);
  }, []);

  return (
    <Box className="post-container">
      <Box className="post-content" gap="4" p={4}>
        <Avatar name="Dan Abrahmov" src={userProfile} />
        <Heading as="h3" size="md">
          {username}
        </Heading>
        <Box marginLeft="auto">
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
                  setShowEditPost(true)
                  onOpen();
                  dispatch(getId(_id));
                  setShowModal(false)
                }}
              >
                Edit post
              </MenuItem>
              {showEditPost&&<EditPostModal onClose={onClose} isOpen={isOpen} />}
              <MenuItem onClick={() => deletePostApi(_id, dispatch)}>
                Delete post
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
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
              ? dislikePostApi(_id, dispatch)
              : likePostApi(_id, dispatch)
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
          onClick={() => {
            onOpen();
            setShowModal(true);
            dispatch(getId(_id));
            setShowEditModal(false);
            
          }}
        >
          <Box as="span" className="material-icons-outlined">
            comment{" "}
          </Box>
          <Box as="span">Comment</Box>
        </Flex>
        {showModal && (
          <CommentModal
            onClose={onClose}
            isOpen={isOpen}
            setComments={setComments}
          />
        )}
        <Flex
          className="post-icon"
          alignItems="center"
          gap="1"
          cursor="pointer"
          onClick={() =>
            bookmarkPost.find((post) => post._id === _id)
              ? removePostFromBookmarkApi(_id, dispatch, toast)
              : addToBookmarkApi(_id, dispatch, toast)
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

      {comments.map(({ _id, content, username, votes }) => (
        <Box
          key={_id}
          display="flex"
          gap={4}
          backgroundColor="#e2e8f0"
          p={4}
          mb="5"
          alignItems="center"
        >
          <Avatar src="https://bit.ly/broken-link" />
          <Box>
            <Heading as="h5" size="sm">
              {username}
            </Heading>
            <Box>{content}</Box>
            {votes.upvotedBy.map(({ _id, firstName, lastName }) => (
              <Box key={_id}>
                Upvoted by:{" "}
                <Heading as="span" size="sm">
                  {firstName} {lastName}
                </Heading>
              </Box>
            ))}
            {votes.downvotedBy.map(({ _id, firstName, lastName }) => (
              <Box key={_id}>
                Downvoted by:{" "}
                <Heading as="span" size="sm">
                  {firstName} {lastName}
                </Heading>
              </Box>
            ))}
          </Box>
          <Box marginLeft="auto" display="flex" gap={4}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              icon={<BiUpvote />}
              onClick={() => upvoteCommentApi(_id, postId, setComments)}
            />
            <IconButton
              variant="outline"
              colorScheme="teal"
              icon={<BiDownvote />}
              onClick={() => downvoteCommentApi(_id, postId, setComments)}
            />
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
                    dispatch(getCommentId(_id));
                    setShowEditModal(true);
                  }}
                >
                  Edit
                </MenuItem>
                {showEditModal && (
                  <EditCommentModal
                    onClose={onClose}
                    isOpen={isOpen}
                    setComments={setComments}
                  />
                )}
                <MenuItem
                  onClick={() => deleteCommentApi(_id, postId, setComments)}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

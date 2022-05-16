import "../../Pages/Home/Home.css";
import { BsThreeDots } from "react-icons/bs";
import { BiUpvote,BiDownvote } from "react-icons/bi";
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
import { usePost } from "../../Context/post-context";
import { EditPostModal } from "../PostModal/EditPostModal";
import { useEffect, useState } from "react";
import { deleteCommentApi, downvoteCommentApi, getComments, upvoteCommentApi } from "../../all-api/comment-api";
import { EditCommentModal } from "../CommentModal/EditCommentModal";
export const PostCard = ({ post }) => {
  const { postDispatch, postState } = usePost();
  const [showModal,setShowModal]=useState(false)
  const { bookmarkPost,createPost } = postState;
  const { onClose, isOpen, onOpen } = useDisclosure();
  const toast=useToast()
  const { _id, content, likes, username } = post;
  const [comments, setComments] = useState([]);
  const postId=_id;
  useEffect(() => {
    getComments(_id, setComments);
  }, []);

  return (
    <Box className="post-container">
      <Box className="post-content" p={4}>
        <Box as="h4">{username}</Box>
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
            <EditPostModal onClose={onClose} isOpen={isOpen} />
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
          onClick={() => {
            onOpen();
            setShowModal(true)
            postDispatch({ type: "ID", payload: _id });
          }}
        >

          <Box className="material-icons-outlined">comment </Box>
          <Box as="span">Comment</Box>
        </Flex>
        {showModal&&<CommentModal
          onClose={onClose}
          isOpen={isOpen}
          setComments={setComments}
        />}
        <Flex
          className="post-icon"
          alignItems="center"
          gap="1"
          cursor="pointer"
          onClick={() =>
            bookmarkPost.find((post) => post._id === _id)
              ? removePostFromBookmarkApi(_id, postDispatch,toast)
              : addToBookmarkApi(_id, postDispatch,toast)
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
      
      {comments.map(({ _id, content, username,votes }) => ( 
     
       <Box key={_id} display="flex" gap={4} backgroundColor="#e2e8f0" p={4} alignItems="center">
          <Avatar src="https://bit.ly/broken-link" />
          <Box>
            <Heading as="h5" size="sm">
              {username}
            </Heading>
            <Box>{content}</Box>
            {votes.upvotedBy.map(({_id,firstName,lastName})=>(
              <Box key={_id}>Upvoted by: <Heading as="span" size="sm">{firstName} {lastName}</Heading></Box>
            ))}
            {votes.downvotedBy.map(({_id,firstName,lastName})=>(
              <Box key={_id}>Downvoted by: <Heading as="span" size="sm">{firstName} {lastName}</Heading></Box>
            ))}
          </Box>
          <Box marginLeft="auto" display="flex" gap={4}>
            <IconButton variant="outline" colorScheme="teal" icon={<BiUpvote/>} onClick={()=>upvoteCommentApi(_id,postId ,setComments)} />
            <IconButton variant="outline" colorScheme="teal" icon={<BiDownvote/>} onClick={()=>downvoteCommentApi(_id,postId ,setComments)}/>
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
                    postDispatch({ type: "COMMENT_ID", payload: _id });
                  }}
                >
                  Edit
                </MenuItem>
                <EditCommentModal onClose={onClose} isOpen={isOpen} setComments={setComments} />
                <MenuItem onClick={() => deleteCommentApi(_id,postId ,setComments)}>
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

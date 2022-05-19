import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Textarea,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostApi } from "../../all-api/post-api";
import { postInputValue } from "../../redux/features/posts/postSlice";
export const PostModal = ({ isOpen, onClose }) => {
  const dispatch=useDispatch()
  const {postInput}=useSelector((state)=>state.posts)
  const initialRef = useRef();
  const finalRef = useRef();
  const user=useSelector((state)=>state.auth.user)

  const postHandler = () => {
    createPostApi(dispatch, postInput,user);
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Textarea
              onChange={(e) => dispatch(postInputValue(e.target.value))}
              ref={initialRef}
              value={postInput}
              placeholder="What do you want to talk about?"
              height="200"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button disabled={!postInput?true:false} onClick={() => postHandler()} colorScheme="teal" mr={3}>
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

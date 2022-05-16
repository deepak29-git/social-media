import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { createPostApi } from "../../all-api/post-api";
import { useAuth } from "../../Context/auth-context";
import { usePost } from "../../Context/post-context";
export const PostModal = ({ isOpen, onClose }) => {
  const {postState:{postInput},postDispatch} = usePost();
  const initialRef = useRef();
  const finalRef = useRef();
  const {user}=useAuth()

  const postHandler = () => {
    createPostApi(postDispatch, postInput,user);
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
            <Input
              onChange={(e) => postDispatch({type:"POST_INPUT",payload:e.target.value})}
              ref={initialRef}
              placeholder="What do you want to talk about?"
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

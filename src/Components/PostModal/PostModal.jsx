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
import { usePost } from "../../Context/post-context";
export const PostModal = ({ isOpen, onClose }) => {
  const [postInput, setPostInput] = useState("");
  const { postDispatch } = usePost();
  const initialRef = useRef();
  const finalRef = useRef();

  const postHandler = () => {
    createPostApi(postDispatch, postInput);
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
              onChange={(e) => setPostInput(e.target.value)}
              ref={initialRef}
              placeholder="What do you want to talk about?"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => postHandler()} colorScheme="teal" mr={3}>
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

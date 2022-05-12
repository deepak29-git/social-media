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
import { useRef } from "react";
import { editPostApi } from "../../all-api/post-api";
import { usePost } from "../../Context/post-context";
export const EditPostModal = ({ isOpen, onClose }) => {
  const { postDispatch, postState } = usePost();
  const { id, editInput } = postState;
  const initialRef = useRef();
  const finalRef = useRef();

  const editChangeHandler = (e) => {
    postDispatch({ type: "EDIT_INPUT", payload: e.target.value });
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
        <ModalHeader>Edit Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Input
              onChange={(e) => editChangeHandler(e)}
              ref={initialRef}
              placeholder="What do you want to talk about?"
              value={editInput}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              editPostApi(postDispatch, id, editInput);
              onClose();
            }}
            colorScheme="teal"
            mr={3}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

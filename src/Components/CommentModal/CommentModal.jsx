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
import { addCommentApi } from "../../all-api/comment-api";
import { usePost } from "../../Context/post-context";

export const CommentModal = ({ isOpen, onClose }) => {
  const {
    postDispatch,
    postState: { commentInput, id },
  } = usePost();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                onChange={(e) =>
                  postDispatch({
                    type: "COMMENT_INPUT",
                    payload: e.target.value,
                  })
                }
                autoFocus
                placeholder="Add your comment"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => addCommentApi(id, commentInput)}
              colorScheme="teal"
              mr={3}
            >
              Add comment
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

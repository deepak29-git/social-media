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
import { useAuth } from "../../Context/auth-context";
import { usePost } from "../../Context/post-context";

export const CommentModal = ({ isOpen, onClose, setComments }) => {
  const {
    postDispatch,
    postState: { commentInput, id },
  } = usePost();
  const { user } = useAuth();

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
              disabled={commentInput?false:true}
              onClick={() => {
                addCommentApi(id, commentInput, user, setComments);
                onClose();
              }}
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

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
import { editCommentApi } from "../../all-api/comment-api";
import { useAuth } from "../../Context/auth-context";
import { usePost } from "../../Context/post-context";

export const EditCommentModal = ({ isOpen, onClose, setComments }) => {
  const {
    postDispatch,
    postState: { commentInput, commentId, id },
  } = usePost();
  const { user } = useAuth();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit comment</ModalHeader>
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
                value={commentInput}
                placeholder="Edit your comment"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              disabled={commentInput ? false : true}
              onClick={() => {
                editCommentApi(commentId, id, commentInput, user, setComments);
                onClose();
              }}
              colorScheme="teal"
              mr={3}
            >
              Update comment
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

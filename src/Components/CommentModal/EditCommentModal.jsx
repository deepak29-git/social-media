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
import { useDispatch, useSelector } from "react-redux";
import { editCommentApi } from "../../all-api/comment-api";
import { commentInputValue } from "../../redux/features/posts/postSlice";

export const EditCommentModal = ({ isOpen, onClose, setComments }) => {
  
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.auth.user)
  const {commentInput, commentId, id}=useSelector((state)=>state.posts)
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
                  dispatch(commentInputValue(e.target.value))
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

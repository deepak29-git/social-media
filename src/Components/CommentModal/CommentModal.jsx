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
import { addCommentApi } from "../../all-api/comment-api";
import {commentInputValue} from '../../redux/features/posts/postSlice'
export const CommentModal = ({ isOpen, onClose, setComments }) => {

  const {commentInput,id}=useSelector((state)=>state.posts)
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)

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
                  dispatch(commentInputValue(e.target.value))
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

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
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPostApi } from "../../all-api/post-api";
import {postInputValue} from '../../redux/features/posts/postSlice'
export const EditPostModal = ({ isOpen, onClose }) => {
  const  dispatch  = useDispatch();
  
  const {id,postInput,content}=useSelector((state)=>state.posts)
  const initialRef = useRef();
  const finalRef = useRef();

  
  const editChangeHandler = (e) => {
    dispatch(postInputValue(e.target.value));
    
  };


  useEffect(()=>{
    dispatch(postInputValue(content))
  },[content])

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
            <Textarea
              onChange={(e) => editChangeHandler(e)}
              ref={initialRef}
              placeholder="What do you want to talk about?"
              value={postInput}
              height="200"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            disabled={postInput?false:true}
            onClick={() => {
              editPostApi(dispatch, id, postInput);
              onClose();
              dispatch(postInputValue(""))
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

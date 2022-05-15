import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { editProfileApi } from "../../all-api/user-api";
import { useAuth } from "../../Context/auth-context";
import { useUser } from "../../Context/user-context";
export const EditProfileModal = ({ isOpen, onClose }) => {
  const initialRef = useRef();
  const finalRef = useRef();
  const {
    userDispatch,
    userState: { user },
  } = useUser();
  const {setUser}=useAuth()
   


  const onChangeHandler = (e) => {
    const {name,value}=e.target;
    userDispatch({type:"GET_USER",payload:{...user,[name]:value}})
  };


  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input type="file"/>
              <FormLabel>First name</FormLabel>
              <Input
                name="firstName"
                onChange={(e) => onChangeHandler(e)}
                ref={initialRef}
                placeholder="First name"
                defaultValue={user.firstName}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                name="lastName"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Last name"
                defaultValue={user.lastName}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>User name</FormLabel>
              <Input
                name="userName"
                onChange={(e) => onChangeHandler(e)}
                placeholder="User name"
                defaultValue={user.userName}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bio</FormLabel>
              <Input
                name="bio"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Bio"
                defaultValue={user.bio}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={() => {
                editProfileApi(user, setUser);
                onClose();
              }}
            >
              Save
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

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
import { useEffect, useRef, useState } from "react";
import { editProfileApi } from "../../all-api/user-api";
import { useAuth } from "../../Context/auth-context";
import { useUser } from "../../Context/user-context";
export const EditProfileModal = ({ isOpen, onClose }) => {
  const {
    userDispatch,
    userState: { user },
  } = useUser();
  const { setUser } = useAuth();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    userDispatch({ type: "GET_USER", payload: { ...user, [name]: value } });
  };

  const onImageChangeHandler=(e)=>{
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
        userDispatch({type:"UPLOAD_IMAGE",payload:URL.createObjectURL(img)})
    }
  }


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Upload profile</FormLabel>
              <Input
                type="file"
                onChange={onImageChangeHandler}
              />
            </FormControl>

            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                name="firstName"
                autoFocus
                onChange={(e) => onChangeHandler(e)}
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

            <FormControl mt={4}>
              <FormLabel>Portfolio</FormLabel>
              <Input
                name="portfolio"
                onChange={(e) => onChangeHandler(e)}
                placeholder="Portfolio link"
                defaultValue={user.portfolio}
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

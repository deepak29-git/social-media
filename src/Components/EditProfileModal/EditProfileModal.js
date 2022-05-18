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
import { useDispatch, useSelector } from "react-redux";
import { editProfileApi } from "../../all-api/user-api";
import { uploadImage,getUserData } from "../../redux/features/user/userSlice";
export const EditProfileModal = ({ isOpen, onClose }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(getUserData({ ...user, [name]: value }));
  };

  const onImageChangeHandler = (e) => {
      let img = e.target.files[0];
      dispatch(uploadImage(URL.createObjectURL(img)));
  };

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
              <Input type="file" onChange={onImageChangeHandler} />
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
                editProfileApi(user, dispatch);
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

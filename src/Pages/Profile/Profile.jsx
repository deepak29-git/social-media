import { Box, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllUser, getUser } from "../../all-api/user-api";
import { EditProfileModal } from "../../Components/EditProfileModal/EditProfileModal";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useUser } from "../../Context/user-context";

export const Profile = () => {
  const { userState, userDispatch } = useUser();
  const { users } = userState;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getAllUser(userDispatch);
  }, []);


  return (
    <Box className="grid-container">
      <Sidebar />
      <EditProfileModal isOpen={isOpen} onClose={onClose} />
      {users.map(({ _id, firstName, lastName,userName,bio }) => (
        <Flex
          key={_id}
          className="post-container"
          p={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Heading as="h4" size="md">
              {firstName} {lastName}
            </Heading>
            <Box as="p">{userName}</Box>
            <Box as="p">{bio}</Box>
          </Box>
          <Button onClick={()=>{
            onOpen()
            getUser(_id,userDispatch)
            }} colorScheme="teal" variant="outline">
            Edit Profile
          </Button>
        </Flex>
       ))} 
    </Box>
  );
};

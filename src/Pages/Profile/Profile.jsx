import { Box, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllUser, getUser } from "../../all-api/user-api";
import { EditProfileModal } from "../../Components/EditProfileModal/EditProfileModal";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useUser } from "../../Context/user-context";
import { Link } from "react-router-dom";
export const Profile = () => {
  const { userState:{users}, userDispatch } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getAllUser(userDispatch);
  }, []);

  return (
    <Box className="grid-container">
      <Sidebar />
      <Box  mt={110} gridColumn="2 / 3" gridGap={10}>

      <EditProfileModal isOpen={isOpen} onClose={onClose} />
      {users.map(({ _id, firstName, lastName, userName, bio }) => (
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
            <Box display="flex" gap="2">
              <Link to="/following">
                <Box as="p">
                  <Heading as="span" size="sm">
                   65
                  </Heading>{" "}
                  Following
                </Box>
              </Link>
              <Link to="/followers">
                <Box as="p">
                  <Heading as="span" size="sm">
                    88
                  </Heading>{" "}
                  Followers
                </Box>
              </Link>
            </Box>
          </Box>
          <Button
            onClick={() => {
              onOpen();
              getUser(_id, userDispatch);
            }}
            colorScheme="teal"
            variant="outline"
            >
            Edit Profile
          </Button>
        </Flex>
      ))}
      </Box>
    </Box>
  );
};

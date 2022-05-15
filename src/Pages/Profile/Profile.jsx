import { Box, Button, Flex, Heading, useDisclosure,Avatar } from "@chakra-ui/react";
import {getUser } from "../../all-api/user-api";
import { EditProfileModal } from "../../Components/EditProfileModal/EditProfileModal";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useUser } from "../../Context/user-context";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
export const Profile = () => {
  const {userState:{followUser} ,userDispatch } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    user: { _id, firstName, lastName, userName, bio },
    setUser
  } = useAuth();

  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>
        <EditProfileModal isOpen={isOpen} onClose={onClose} />

        <Flex
          key={_id}
          className="post-container"
          p={4}
          gap="1rem"
          alignItems="center"
        >
          <Avatar src='https://bit.ly/broken-link' />
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
                    {followUser?.following?.length || 0}
                    
                  </Heading>{" "}
                  Following
                </Box>
              </Link>
              <Link to="/followers">
                <Box as="p">
                  <Heading as="span" size="sm">
                  {followUser?.followers?.length || 0}
                  </Heading>{" "}
                  Followers
                </Box>
              </Link>
            </Box>
          </Box>
          <Button
            marginLeft="auto"
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
      </Box>
    </Box>
  );
};

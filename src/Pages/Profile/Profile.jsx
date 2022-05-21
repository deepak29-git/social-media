import {
  Box,
  Button,
  Flex,
  Heading,
  useDisclosure,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { getUser } from "../../all-api/user-api";
import { EditProfileModal } from "../../Components/EditProfileModal/EditProfileModal";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useDispatch, useSelector } from "react-redux";
export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const followUser = useSelector((state) => state.user.followUser);
  const profileImage = useSelector((state) => state.user.uploadImage);
  const userData = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { _id, firstName, lastName, userName, bio, portfolio, uploadImage } =
    userData;

  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3">
        <EditProfileModal isOpen={isOpen} onClose={onClose} />

        <Flex
          key={_id}
          className="post-container"
          p={4}
          gap="1rem"
          alignItems="center"
        >
          <Avatar
            size="2xl"
            src={profileImage || uploadImage}
            alt="profilePicure"
          />
          <Box>
            <Heading as="h4" size="md">
              {firstName} {lastName}
            </Heading>
            <Box as="p">{userName}</Box>
            <Box as="p">{bio}</Box>
            <Link href="https://deepak-portfolio-react.netlify.app/" isExternal>
              {portfolio} <ExternalLinkIcon mx="2px" />
            </Link>
            <Box display="flex" gap="2">
              <NavLink to="/following">
                <Heading as="span" size="sm">
                  {followUser?.following?.length || 0}
                </Heading>{" "}
                <Box className="user-profile">Following</Box>
              </NavLink>
              <NavLink to="/followers">
                <Heading as="span" size="sm">
                  {followUser?.followers?.length || 0}
                </Heading>{" "}
                <Box className="user-profile">Followers</Box>
              </NavLink>
            </Box>
          </Box>
          <Button
            marginLeft="auto"
            onClick={() => {
              onOpen();
              getUser(_id, dispatch, user);
            }}
            colorScheme="teal"
            variant="outline"
          >
            Edit Profile
          </Button>
        </Flex>
      </Box>
      <RightSidebar />
    </Box>
  );
};

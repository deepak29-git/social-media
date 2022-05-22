import {
  Box,
  Flex,
  Avatar,
  Heading,
  Link,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import {
  followUserApi,
} from "../../all-api/follow-unfollow-api";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { followUserName } from "../../redux/features/user/userSlice";
import { UnfollowModal } from "../../Components/UnfollowModal/UnfollowModal";
export const SingleProfile = () => {
  const { username } = useParams();
  const { users } = useSelector((state) => state.user);
  const { followUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {onOpen,isOpen,onClose}=useDisclosure()
  const findData = users.find((user) => user?.username === username);
  const { _id,firstName, lastName, bio, uploadImage, portfolio } =
    findData;

  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>
        <Flex className="post-container" p={4} gap="1rem" alignItems="center">
          <Avatar size="2xl" src={uploadImage} alt="profilePicure" />
          <Box>
            <Heading as="h4" size="md">
              {firstName} {lastName}
            </Heading>
            <Box as="p">{bio}</Box>
            <Link href="https://deepak-portfolio-react.netlify.app/" isExternal>
              {portfolio} <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          <Box marginLeft="auto">
               <UnfollowModal isOpen={isOpen} onClose={onClose} _id={_id} />
          {followUser?.following?.find((user) => user._id === _id) ? (
            <Button
            onClick={() => {
              onOpen()
              dispatch(followUserName(username))
            }}
              colorScheme="teal"
            >
              Following
            </Button>
          ) : (
            <Button
            onClick={() => followUserApi(_id, dispatch)}
            colorScheme="teal"
            >
              Follow
            </Button>
          )}
          </Box>
        </Flex>
      </Box>
      <RightSidebar />
    </Box>
  );
};

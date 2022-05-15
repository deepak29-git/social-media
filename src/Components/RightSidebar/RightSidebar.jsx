import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  followUserApi,
  unfollowUserApi,
} from "../../all-api/follow-unfollow-api";
import { getAllUser } from "../../all-api/user-api";
import { useUser } from "../../Context/user-context";

export const RightSidebar = () => {
  const {
    userState: { users, followUser },
    userDispatch,
  } = useUser();

  useEffect(() => {
    getAllUser(userDispatch);
  }, []);

  return (
    <Box className="right-sidebar-container" >
      {users.map(({ _id, firstName, lastName }) => (
        <Box key={_id} as="h4" mt={4} display="flex" justifyContent="space-around" alignItems="center">
          <Box as="p">
            {firstName} {lastName}
          </Box>
          {followUser?.following?.find((user) => user._id === _id) ? (
            <Button
              onClick={() => unfollowUserApi(_id, userDispatch)}
              colorScheme="teal"
            >
              Following
            </Button>
          ) : (
            <Button
              onClick={() => followUserApi(_id, userDispatch)}
              colorScheme="teal"
            >
              Follow
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};

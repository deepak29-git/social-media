import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserApi,
  unfollowUserApi,
} from "../../all-api/follow-unfollow-api";
import { getAllUser } from "../../all-api/user-api";

export const RightSidebar = () => {
  const {users,followUser}=useSelector((state)=>state.user)
  const dispatch=useDispatch()

  useEffect(() => {
    getAllUser(dispatch)
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
              onClick={() => unfollowUserApi(_id, dispatch)}
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
      ))}
    </Box>
  );
};

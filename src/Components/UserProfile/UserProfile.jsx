import { Box } from "@chakra-ui/react";
import { useUser } from "../../Context/user-context";

export const UserProfile = () => {
  const { userState, userDispatch } = useUser();
  const { users } = userState;
 
  return (
    <Box className="right-sidebar-container">
      {users.map(({ _id, firstName, lastName }) => (
        <Box  as="h4">
          {users.firstName} {users.lastName}
        </Box>
      ))} 
    </Box>
  );
};

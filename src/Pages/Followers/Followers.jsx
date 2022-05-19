import { Box, Flex,Heading } from "@chakra-ui/react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
export const Followers = () => {
  const { followUser } = useSelector((state) => state.user);
  console.log(followUser,"followuser")
  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>
        <Flex
          className="post-container"
          p={4}
          justifyContent="space-between"
          alignItems="center"
        >
         <Heading as="h4" size="md">followers ({followUser.followers.length})</Heading>
        </Flex>
      </Box>
    </Box>
  );
};

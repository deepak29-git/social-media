import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
export const Followers = () => {
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
          followers
        </Flex>
      </Box>
    </Box>
  );
};

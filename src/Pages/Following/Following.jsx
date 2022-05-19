import { Box, Flex, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import {  UnfollowModal } from "../../Components/UnfollowModal/UnfollowModal";
import { followUserName } from "../../redux/features/user/userSlice";
export const Following = () => {
  const { followUser } = useSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch=useDispatch()
  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>
        <Flex className="post-container" p={4} flexDirection="column">
          {}
          <Heading as="h4" size="md">
            Following ({followUser?.following?.length || 0})
          </Heading>
          {followUser?.following?.map(({ _id, firstName, lastName,username }) => (
            <Flex
              key={_id}
              alignItems="center"
              justifyContent="space-between"
              mt={4}
            >
              <Box>
                {firstName} {lastName} 
              </Box>
              <Button onClick={()=>{
                onOpen()
                dispatch(followUserName(username))
                }} colorScheme="teal" variant="outline">
                Following
              </Button>
              <UnfollowModal isOpen={isOpen} onClose={onClose} _id={_id} />
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

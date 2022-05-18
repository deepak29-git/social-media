import { Box, Flex,Button,Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unfollowUserApi } from "../../all-api/follow-unfollow-api";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
export const Following = () => {
  const [buttonText,setButtonText]=useState(false)
  const {followUser}=useSelector((state)=>state.user)
  const dispatch=useDispatch()

  return (
    <Box className="grid-container">
      <Sidebar />
      <Box  mt={110} gridColumn="2 / 3" gridGap={10}>

      <Flex className="post-container" p={4} flexDirection="column">
       <Heading as="h4" size="md">Following</Heading> 
        {
          followUser?.following?.map(({ _id, firstName, lastName }) => (
            <Flex key={_id} alignItems="center" justifyContent="space-between" mt={4}>
              <Box >
                {firstName} {lastName}
              </Box>
              {buttonText? <Button onClick={()=>unfollowUserApi(_id,dispatch)} onMouseLeave={()=>setButtonText(false)} colorScheme="teal" variant="outline">Unfollow</Button>:<Button onMouseOver={()=>setButtonText(true)} colorScheme="teal" variant="outline">Following</Button>}
            </Flex>
          ))}
      </Flex>
    </Box>
      </Box>
  );
};

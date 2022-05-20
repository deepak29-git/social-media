import { Box, Button,Heading,Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from 'react-router-dom'
import "../RightSidebar/RightSidebar.css"
import {
  followUserApi,
  unfollowUserApi,
} from "../../all-api/follow-unfollow-api";
import { getAllUser } from "../../all-api/user-api";

export const RightSidebar = () => {
  const {users,followUser}=useSelector((state)=>state.user)
  const {user}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const [showUser,setShowUser]=useState([])

  useEffect(() => {
    getAllUser(dispatch)
  }, []);

  useEffect(()=>{
    const filteredUser=users.filter(userData=>userData.firstName!==user.firstName)
    setShowUser(filteredUser)
  },[users])

  return (
    <Box className="right-sidebar-container" p={4} >
      <Heading as="h4" size="md">Who to follow</Heading>
      {showUser.map(({ _id, firstName, lastName,uploadImage,username }) => (
        <Box key={_id} className="user-profile" as="h4" mt={4} display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
          <NavLink to={`/${username}`} >
            <Box display="flex" alignItems="center" gap={2}>
          <Avatar name="Dan Abrahmov" src={uploadImage} />
          <Box as="p">
            {firstName} {lastName}
          </Box>
            </Box>
          </NavLink>
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

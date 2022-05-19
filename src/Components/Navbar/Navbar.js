import "../Navbar/Navbar.css";
import { Button, Box, Heading, useToast } from "@chakra-ui/react";
import { Link,useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { logoutBtn } from "../../redux/features/auth/authSlice";
export const Navbar = () => {
  const auth=useSelector((state)=>state.auth.value)
  const {user}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const toast=useToast()
  const {firstName}=user;
  return (
    <Box px={10} py={4} className="nav-container">
      <Box display="flex" gap="5" alignItems="center" mb={4}>
        <Box>
          <Link to="/">
            <Heading color="teal" as="h1" size="2xl" isTruncated>
              Talkmedia
            </Heading>
          </Link>
        </Box>
        {auth ? (
          <Box display="flex" justifyContent="flex-end" width="100%" gap="1rem" alignItems="center">
            <Heading as="h4" size="md" color="teal">Hi, {firstName}</Heading>
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                dispatch(logoutBtn());
                navigate('/signin')
                toast({
                  title: "Logout Successfully.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
              colorScheme="teal"
              variant="outline"
            >
              Logout            
              </Button>
          </Box>
        ) : (
          <Box display="flex" justifyContent="flex-end" width="100%" gap="1rem">
            <Button colorScheme="teal" variant="solid">
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button colorScheme="teal" variant="outline">
              <Link to="/signup">Join Now</Link>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

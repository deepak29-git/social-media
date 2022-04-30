import "../Navbar/Navbar.css";
import { Button, Box, Heading } from "@chakra-ui/react";
import {Link} from 'react-router-dom' 
import "../Navbar/Navbar.css";
import { useAuth } from "../../Context/auth-context";

export const Navbar = () => {
  const {isAuth,setIsAuth}=useAuth()
  return (
    <Box p={4}>
      <Box display="flex" gap="5" alignItems="center" mb={4}>
        <Box>
          <Link to="/">
          <Heading color="teal" as="h1" size="2xl" isTruncated>
            ClinchIn
          </Heading>
          </Link>
        </Box>
        {isAuth?<Box display="flex" justifyContent="flex-end" width="100%" gap="1rem"><Button onClick={()=>{
          localStorage.removeItem("token")
          setIsAuth(false)
          }} colorScheme="teal" variant="solid">
            <Link to="/">
            Logout
            </Link>
          </Button>
          </Box>:<Box display="flex" justifyContent="flex-end" width="100%" gap="1rem">
          <Button colorScheme="teal" variant="solid">
            <Link to="/">
            Sign In
            </Link>
          </Button>
          <Button colorScheme="teal" variant="outline">
            <Link to="/signup">
            Join Now
            </Link>
          </Button>
        </Box>}
      </Box>
      <hr />
    </Box>
  );
};
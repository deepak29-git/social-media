import {
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import landing from "../../assets/svg/landing.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";


export const Signup = () => {
  const [show, setShow] = useState(false);
  const { setIsAuth } = useAuth();
  const toast = useToast()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signupHandler = async () => {
    const { firstName, lastName, userName, password } = user;
    if (!firstName && !lastName && !userName && !password) {
      alert("Enter all fields");
    }
    if (password.length < 8) {
      alert("password should contain atleast 8 character");
    }

    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/auth/signup",
        data: {
          firstName: firstName,
          lastName: lastName,
          username: userName,
          password: password,
        },
      });
      localStorage.setItem("token", data.encodedToken);
      setIsAuth(true);
      navigate("/");
      toast({
        title: 'Singup Successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      boxSize="md"
      display="flex"
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
    >
      <Image mt={110}  boxSize="29rem" src={landing} alt="landing" />
      <Box mt={110}  width="30rem" px={2}>
        <Heading mb={8}>Create your account</Heading>
        <FormControl>
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <Input
            mb={2}
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={onChangeHandler}
            type="text"
            placeholder="Enter firstname"
          />
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input
            mb={2}
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={onChangeHandler}
            type="text"
            placeholder="Enter lastname"
          />
          <FormLabel htmlFor="userName">Username</FormLabel>
          <Input
            mb={2}
            id="userName"
            name="userName"
            value={user.userName}
            onChange={onChangeHandler}
            type="text"
            placeholder="Enter username"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Box position="relative">
            <Input
              id="password"
              name="password"
              value={user.password}
              onChange={onChangeHandler}
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <Box
              onClick={() => setShow(!show)}
              cursor="pointer"
              position="absolute"
              right="10px"
              top="0"
              fontSize="1.5rem"
            >
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Box>
          </Box>
          <Button
            disabled={
              user.firstName && user.lastName && user.userName && user.password
                ? false
                : true
            }
            onClick={signupHandler}
            colorScheme="teal"
            width="100%"
            mt={4}
          >
            Sign up
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

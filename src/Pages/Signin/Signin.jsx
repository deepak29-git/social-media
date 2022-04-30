import {
  Box,
  Image,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import landing from "../../assets/svg/landing.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";

export const SignIn = () => {
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const { setIsAuth } = useAuth();
  const toast = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setShowMsg(false);
  };

  const signInHandler = async () => {
    const { email, password } = user;

    if (password.length < 8) {
      setShowMsg(true);
      return false;
    }
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: {
          email: email,
          password: password,
        },
      });
      localStorage.setItem("token", data.encodedToken);
      setIsAuth(true);
      navigate("/home");
      toast({
        title: "Logged In Successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
      <Image boxSize="29rem" src={landing} alt="landing" />
      <Box width="30rem" px={2}>
        <Heading mb={8}>Welcome to your professional community</Heading>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            mb={2}
            id="email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Enter your email"
          />
          {showMsg && <FormHelperText>Enter email</FormHelperText>}
          <FormLabel htmlFor="password">Password</FormLabel>
          <Box position="relative">
            <Input
              id="password"
              name="password"
              value={user.password}
              onChange={onChangeHandler}
              type={show ? "text" : "password"}
              placeholder="Enter your password"
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
          {showMsg && (
            <FormHelperText>
              password should contain atleast 8 character
            </FormHelperText>
          )}
          <Button
            disabled={user.email && user.password ? false : true}
            onClick={signInHandler}
            colorScheme="teal"
            width="100%"
            mt={4}
          >
            Sign In
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

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
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import landing from "../../assets/svg/landing.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinBtn, userData } from "../../redux/features/auth/authSlice";
export const SignIn = () => {
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setShowMsg(false);
  };

  const signInHandler = async () => {
    const { username, password } = user;
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: {
          username: username,
          password: password,
        },
      });
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      dispatch(signinBtn());
      dispatch(userData(data.foundUser))
      navigate("/");
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

  const guestLoginHandler = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: {
          username: "deepak_1996",
          password: "deepak123",
        },
      });
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      dispatch(signinBtn());
      navigate("/");
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
      <Image mt={110} boxSize="29rem" src={landing} alt="landing" />
      <Box mt={110} width="30rem" px={2}>
        <Heading mb={8}>Welcome to your professional community</Heading>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            mb={2}
            id="username"
            name="username"
            value={user.username}
            onChange={onChangeHandler}
            type="username"
            placeholder="Enter your username"
          />
          {showMsg && <FormHelperText>Enter username</FormHelperText>}
          <FormLabel htmlFor="password">Password</FormLabel>
          <Box position="relative">
            <InputGroup size="md">
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
                <InputRightElement width="3rem">
                  <Button>{show ? <ViewOffIcon /> : <ViewIcon />}</Button>
                </InputRightElement>
              </Box>
            </InputGroup>
          </Box>
          <Button
            disabled={user.username && user.password ? false : true}
            onClick={signInHandler}
            colorScheme="teal"
            width="100%"
            mt={4}
          >
            Sign In
          </Button>
          <Button
            onClick={guestLoginHandler}
            colorScheme="teal"
            width="100%"
            mt={4}
          >
            Guest Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

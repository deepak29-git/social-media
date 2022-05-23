import {
  List,
  UnorderedList,
  ListItem,
  Heading,
  Icon,
  Button,
  extendTheme,
  useDisclosure,
} from "@chakra-ui/react";

import "../Sidebar/Sidebar.css";
import {
  AiOutlineHome,
  MdOutlineExplore,
  BsBookmark,
  CgProfile,
} from "../import-icon";
import { PostModal } from "../PostModal/PostModal";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postInputValue } from "../../redux/features/posts/postSlice";
export const Sidebar = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.auth)
  const {username}=user;
 
  const borderRadius = {
    radii: {
      full: "9999px",
    },
  };
  const theme = extendTheme(borderRadius);
   

  return (
    <>
      <PostModal onClose={onClose} isOpen={isOpen} />
      <List className="list-container">
        <UnorderedList className="unordered-list">
          <NavLink to="/"  style={(({isActive})=>isActive?{color:"teal"}:undefined)}>
            <ListItem className="list-item">
              <Icon as={AiOutlineHome} w={6} h={6} />
              <Heading size="md">Home</Heading>
            </ListItem>
          </NavLink>

          <NavLink to="/explore" style={(({isActive})=>isActive?{color:"teal"}:undefined)}>
          <ListItem className="list-item">
            <Icon as={MdOutlineExplore} w={6} h={6} />
            <Heading size="md">Explore</Heading>
          </ListItem>
          </NavLink>

          <NavLink to="/bookmark" style={(({isActive})=>isActive?{color:"teal"}:undefined)}>
            <ListItem className="list-item">
              <Icon as={BsBookmark} w={6} h={6} />
              <Heading size="md">Bookmarks</Heading>
            </ListItem>
          </NavLink>

          <NavLink to={`/profile/${username}`} style={(({isActive})=>isActive?{color:"teal"}:undefined)}>
          <ListItem className="list-item">
            <Icon as={CgProfile} w={6} h={6} />
            <Heading size="md">Profile</Heading>
          </ListItem>
          </NavLink>

          <Button
            onClick={()=>{
              onOpen()
              dispatch(postInputValue(""))
            }}
            borderRadius={theme.radii.full}
            colorScheme="teal"
          >
            Create post
          </Button>
        </UnorderedList>
      </List>
    </>
  );
};

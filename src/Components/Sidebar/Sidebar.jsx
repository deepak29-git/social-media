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
  AiOutlineMessage,
  MdOutlineExplore,
  IoIosNotificationsOutline,
  BsBookmark,
  BsCardList,
  CgProfile,
  FiMoreHorizontal,
} from "../import-icon";
import { PostModal } from "../PostModal/PostModal";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const borderRadius = {
    radii: {
      none: "0",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  };
  const theme = extendTheme(borderRadius);

  return (
    <>
      <PostModal onClose={onClose} isOpen={isOpen} />
      <List className="list-container">
        <UnorderedList className="unordered-list">
          <NavLink to="/">
            <ListItem className="list-item">
              <Icon as={AiOutlineHome} w={6} h={6} />
              <Heading size="md">Home</Heading>
            </ListItem>
          </NavLink>

          <ListItem className="list-item">
            <Icon as={MdOutlineExplore} w={6} h={6} />
            <Heading size="md">Explore</Heading>
          </ListItem>

          <ListItem className="list-item">
            <Icon as={IoIosNotificationsOutline} w={6} h={6} />
            <Heading size="md">Notification</Heading>
          </ListItem>

          <ListItem className="list-item">
            <Icon as={AiOutlineMessage} w={6} h={6} />
            <Heading size="md">Message</Heading>
          </ListItem>

          <NavLink to="/bookmark">
            <ListItem className="list-item">
              <Icon as={BsBookmark} w={6} h={6} />
              <Heading size="md">Bookmarks</Heading>
            </ListItem>
          </NavLink>

          <ListItem className="list-item">
            <Icon as={BsCardList} w={6} h={6} />
            <Heading size="md">Lists</Heading>
          </ListItem>

          <ListItem className="list-item">
            <Icon as={CgProfile} w={6} h={6} />
            <Heading size="md">Profile</Heading>
          </ListItem>

          <ListItem className="list-item">
            <Icon as={FiMoreHorizontal} w={6} h={6} />
            <Heading size="md">More</Heading>
          </ListItem>

          <Button
            onClick={onOpen}
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

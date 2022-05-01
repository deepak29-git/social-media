import { List, UnorderedList, ListItem, Heading, Icon } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsBookmark, BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";

import '../Sidebar/Sidebar.css'
export const Sidebar = () => {
    
  return (
    <List className="list-container">
      <UnorderedList className="unordered-list">
        <ListItem className="list-item" >
          <Icon as={AiOutlineHome} w={6} h={6} />
          <Heading size="md">Home</Heading>
        </ListItem>

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

        <ListItem className="list-item">
          <Icon as={BsBookmark} w={6} h={6} />
          <Heading size="md">Bookmarks</Heading>
        </ListItem>

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
      </UnorderedList>
    </List>
  );
};

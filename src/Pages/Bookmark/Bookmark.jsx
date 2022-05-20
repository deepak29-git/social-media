import { Box,Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkApi } from "../../all-api/bookmark";
import { PostCard } from "../../Components/PostCard/PostCard";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import {RightSidebar} from '../../Components/RightSidebar/RightSidebar'
export const Bookmark = () => {
  const dispatch = useDispatch();
  const { bookmarkPost } = useSelector((state) => state.posts);

  useEffect(() => {
    getBookmarkApi(dispatch);
  }, [bookmarkPost]);


  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3" gridGap={10}>

      {bookmarkPost.length===0?
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
      <Heading as="h3" size="lg">No Bookmark</Heading>
      </Box>
      :bookmarkPost.map((post) => (
        <PostCard key={post._id} post={post} />
        ))}
      </Box>
      <RightSidebar/>
    </Box>
  );
};

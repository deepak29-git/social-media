import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkApi } from "../../all-api/bookmark";
import { PostCard } from "../../Components/PostCard/PostCard";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

export const Bookmark = () => {
  const dispatch = useDispatch();
  const { bookmarkPost } = useSelector((state) => state.posts);

  useEffect(() => {
    getBookmarkApi(dispatch);
  }, []);

  return (
    <Box className="grid-container">
      <Sidebar />
      {bookmarkPost.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      <Box className="right-sidebar-container">Profile</Box>
    </Box>
  );
};

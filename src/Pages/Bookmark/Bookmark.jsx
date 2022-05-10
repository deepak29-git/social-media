import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { getBookmark } from "../../all-api/bookmark";
import { PostCard } from "../../Components/PostCard/PostCard";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { usePost } from "../../Context/post-context";

export const Bookmark = () => {
  const { postState, postDispatch } = usePost();
  const { bookmarkPost } = postState;

  useEffect(() => {
    getBookmark(postDispatch);
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

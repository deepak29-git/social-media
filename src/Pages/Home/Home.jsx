import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Box, Button, Image } from "@chakra-ui/react";
import { PostCard } from "../../Components/PostCard/PostCard";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useEffect } from "react";
import { getPost } from "../../all-api/post-api";
import { useLoader } from "../../Custom-hook/loader";
import loading from "../../assets/gif/loading.gif";
import "../Home/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getCreatePost } from "../../redux/features/posts/postSlice";
import { signupBtn } from "../../redux/features/auth/authSlice";
export const Home = () => {
  const dispatch = useDispatch();
  const { createPost } = useSelector((state) => state.posts);
  const { loader, setLoader } = useLoader();

  useEffect(() => {
    getPost(dispatch, setLoader);
  }, []);

  

  const sortByDateBtn = (action) => {
    if (action === "sortByDate") {
      const sortedPostBySec = [...createPost].sort(
        (a, b) =>
          b.createdAt.slice(16, 19).split(":").join("") -
          a.createdAt.slice(16, 19).split(":").join("")
      );

      dispatch(getCreatePost(sortedPostBySec));
    } else {
      dispatch(getCreatePost(createPost));
    }
  };

  const trendingBtn = (action) => {
    if (action === "sortByTrending") {
      const sortedPost = [...createPost].sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
      dispatch(getCreatePost(sortedPost));
    } else {
      dispatch(getCreatePost(createPost));
    }
  };
  return (
    <Box className="grid-container">
      <Sidebar />
      <Box mt={110} gridColumn="2 / 3">
        <Box
          display="flex"
          py={4}
          gap="4"
          mb={4}
          position="sticky"
          top="80px"
          backgroundColor="#f3f2ef"
          zIndex="1"
        >
          <Button
            onClick={() => trendingBtn("sortByTrending")}
            as="h4"
            size="md"
            variant="outline"
            colorScheme="teal"
            cursor="pointer"
          >
            Trending
          </Button>
          <Button
            onClick={() => sortByDateBtn("sortByDate")}
            as="h4"
            size="md"
            variant="outline"
            colorScheme="teal"
            cursor="pointer"
          >
            Sort by date
          </Button>
        </Box>
        {loader && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Image src={loading} boxSize="100px" alt="loading" />
          </Box>
        )}

        {createPost.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </Box>
      <RightSidebar />
    </Box>
  );
};

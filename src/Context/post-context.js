import { createContext, useContext, useReducer } from "react";
import { postReducer } from "../Reducer/post-reducer";

const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  
  const [postState, postDispatch] = useReducer(postReducer, {
    createPost: [],
    id:"",
    content:"",
    postInput:"",
    bookmarkPost:[],
    commentInput:"",
    editCommentInput:"",
    comments:[],
    commentId:""
  });

  return (
    <PostContext.Provider value={{ postState, postDispatch }}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { usePost, PostProvider };

export const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_POST":
      return { ...state, createPost: action.payload };
    case "CREATE_POST":
      return { ...state, createPost: action.payload };
      case "POST_INPUT":
        return { ...state, postInput: action.payload };
    case "EDIT_POST":
      return { ...state, createPost: action.payload };
    case "ID":
      return { ...state, id: action.payload };
    case "CONTENT":
      return { ...state, content: action.payload };
    case "DELETE_POST":
      return { ...state, createPost: action.payload };
    case "LIKE_POST":
      return { ...state, createPost: action.payload };
    case "DISLIKE_POST":
      return { ...state, createPost: action.payload };
    case "BOOKMARK_POST":
      return { ...state, bookmarkPost: action.payload };
    case "REMOVE_BOOKMARK_POST":
      return { ...state, bookmarkPost: action.payload };
    case "GET_BOOKMARK":
      return { ...state, bookmarkPost: action.payload };
      case "COMMENT_INPUT":
        return { ...state, commentInput: action.payload };
      case "EDIT_COMMENT_INPUT":
        return { ...state, editCommentInput: action.payload };
      case "ADD_COMMENT":
        return {...state,comments:action.payload}
      case "GET_COMMENTS":
        return {...state,comments:action.payload}
        case "COMMENT_ID":
          return {...state,commentId:action.payload}
    default:
      return state;
  }
};

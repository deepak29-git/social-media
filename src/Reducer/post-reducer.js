export const postReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return { ...state, createPost: action.payload };
    case "EDIT_POST":
      return { ...state, createPost: action.payload };
    case "ID":
      return { ...state, id: action.payload };
    case "CONTENT":
      return { ...state, content: action.payload };
    case "EDIT_INPUT":
      return { ...state, editInput: action.payload };
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
    default:
      return state;
  }
};

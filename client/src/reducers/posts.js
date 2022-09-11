
const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "CREATE":
      return action.payload;
    case "FETCH_ALL":
      return posts;
    default:
      return posts;
  }
};

export default postsReducer;

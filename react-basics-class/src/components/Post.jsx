const Post = ({ user }) => {
  return (
    <>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </>
  );
};

export default Post;

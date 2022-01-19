import { useParams } from "remix";

function Post() {
  const params = useParams();
  return <div>{params.postId}</div>;
}

export default Post;

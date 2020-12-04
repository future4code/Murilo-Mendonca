import AddPostPage from "../../components/AddPostPage/AddPostPage";
import PostCard from "../../components/PostCard/PostCard";
import { BASE_URL } from "../../constants/BASE_URL";
import useRequestData from "../../hooks/useRequestData";
import { FeedContainer } from "./styles";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage();

  const posts = useRequestData(`${BASE_URL}/posts`, []);
  const post = posts.posts || [];

  return (
    <FeedContainer>
      <AddPostPage />
      <div>
        {post.length > 0 &&
          post.map((post) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                text={post.text}
                username={post.username}
                commentsCount={post.commentsCount}
                votesCount={post.votesCount}
                title={post.title}
              />
            );
          })}
      </div>
    </FeedContainer>
  );
};

export default FeedPage;

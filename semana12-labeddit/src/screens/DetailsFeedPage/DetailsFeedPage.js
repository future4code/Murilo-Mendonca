import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import AddCommentCard from "../../components/AddCommentCard/AddCommentCard";
import CommentsCard from "../../components/CommentsCard/CommentsCard";

import {
  CardContainer,
  LikesContainer,
  CommentsContainer,
  BottomContainer,
  TextContainer,
  DetailsFeedContainer,
} from "./styles";

const DetailsFeedPage = () => {
  useProtectedPage();
  const params = useParams();
  const posts = useRequestData(`${BASE_URL}/posts/${params.postId}`, {});
  const postsDetails = posts.post;
  const postsComments = postsDetails && postsDetails.comments;

  return (
    <DetailsFeedContainer>
      <h3>Post</h3>
      {posts.post && (
        <div>
          <CardContainer>
            <h3>{posts.post.username}</h3>
            <TextContainer>
              <div>{posts.post.text}</div>
            </TextContainer>
            <BottomContainer>
              <LikesContainer>
                <button>+</button>
                <p>{posts.post.votesCount}</p>
                <button>-</button>
              </LikesContainer>
              <CommentsContainer>
                <p>{posts.post.commentsCount} Comentários</p>
              </CommentsContainer>
            </BottomContainer>
          </CardContainer>
          <div>
            <h3>Add Comment</h3>
            <AddCommentCard />
            <h3>Comments</h3>
            {postsComments &&
              postsComments.map((comment) => {
                return (
                  <CommentsCard
                    key={comment.id}
                    id={comment.id}
                    postId={postsDetails.id}
                    username={comment.username}
                    votesCount={comment.votesCount}
                    commentsCount={comment.votesCount}
                    text={comment.text}
                  />
                );
              })}
          </div>
        </div>
      )}
    </DetailsFeedContainer>
  );
};

export default DetailsFeedPage;

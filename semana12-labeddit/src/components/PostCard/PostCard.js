import React from "react";
import { useHistory } from "react-router-dom";
import { goToDetailsFeedPage } from "../../routes/Coordinator";
import {
  CardContainer,
  LikesContainer,
  CommentsContainer,
  BottomContainer,
  TextContainer,
} from "./styles";

const PostCard = (props) => {
  const history = useHistory();

  return (
    <CardContainer>
      <h3>{props.username}</h3>
      <TextContainer onClick={() => goToDetailsFeedPage(history, props.id)}>
        <div>{props.text}</div>
      </TextContainer>
      <BottomContainer>
        <LikesContainer>
          <button>+</button>
          <p>{props.votesCount}</p>
          <button>-</button>
        </LikesContainer>
        <CommentsContainer>
          <p onClick={() => goToDetailsFeedPage(history, props.id)}>
            {props.commentsCount} Comentários
          </p>
        </CommentsContainer>
      </BottomContainer>
    </CardContainer>
  );
};

export default PostCard;

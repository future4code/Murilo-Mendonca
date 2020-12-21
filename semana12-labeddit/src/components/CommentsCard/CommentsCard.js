import React from "react";
import {
  CardContainer,
  LikesContainer,
  BottomContainer,
  TextContainer,
} from "./styles";

const CommentsCard = (props) => {
  return (
    <CardContainer>
      <h3>{props.username}</h3>
      <TextContainer>
        <div>{props.text}</div>
      </TextContainer>
      <BottomContainer>
        <LikesContainer>
          <button>+</button>
          <p>{props.votesCount}</p>
          <button>-</button>
        </LikesContainer>
      </BottomContainer>
    </CardContainer>
  );
};

export default CommentsCard;

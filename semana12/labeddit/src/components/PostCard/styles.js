import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #343a40;
  color: #f8f9fa;
  width: 50vw;
  border: 2px solid #6c757d;
  border-radius: 5px;
  font-family: sans-serif;
  margin-bottom: 25px;
`;

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 70px;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #6c757d;
  width: 50vw;
  height: 50px;
  border-top: 2px solid #6c757d;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #f8f9fa;
  width: 50vw;
  height: 200px;
  border-top: 2px solid #6c757d;
  cursor: pointer;
`;

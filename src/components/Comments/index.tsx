import React from "react";
/* Components */
import Comment from "./Comment";
/* Styled */
import { Container } from "./styled";

interface Props {
  comments: number[];
}

const Story: React.FC<Props> = ({ comments }) => {
  return (
    <Container>
      {comments.map((id) => (
        <Comment key={id} id={id} />
      ))}
    </Container>
  );
};

export default Story;

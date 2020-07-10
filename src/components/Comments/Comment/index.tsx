import React, { useState, useEffect } from "react";
/* API */
import { getCommentById } from "api/stories";
/* Comments */
import Comments from "components/Comments";
/* Styled */
import {
  Container,
  Information,
  Details,
  Detail,
  Icon,
  Text,
  CommentBody,
} from "./styled";
/* Utils */
import { getTime } from "utils";

interface Props {
  id: number;
}

interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

const initialComment = {
  by: "",
  id: 0,
  kids: [],
  parent: 0,
  text: "",
  time: 0,
  type: "",
};

const Comment: React.FC<Props> = ({ id }) => {
  const [comment, setComment] = useState<Comment>(initialComment);
  useEffect(() => {
    getCommentById(id)
      .then(({ data }: { data: Comment }) => setComment(data))
      .catch((error: any) => console.log(error));
  }, [id]);
  return (
    <Container>
      <Information>
        <Details>
          <Detail>
            <Icon className="fas fa-user" />
            <Text>{comment.by}</Text>
          </Detail>
          <Detail>
            <Icon className="fas fa-clock" />
            <Text>{getTime(comment.time)}</Text>
          </Detail>
        </Details>
      </Information>
      <CommentBody>{comment.text}</CommentBody>
      {comment.kids && <Comments comments={comment.kids} />}
    </Container>
  );
};

export default Comment;

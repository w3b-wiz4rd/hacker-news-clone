import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
/* API */
import { getStoryById } from "api/stories";
/* Comments */
import Comments from "components/Comments";
/* Styled */
import {
  Container,
  Content,
  Activity,
  Information,
  Points,
  Count,
  Sub,
  TotalComments,
  CommentsContainer,
  Title,
  Details,
  Detail,
  Icon,
  Text,
} from "./styled";
/* Utils */
import { getTime } from "utils";

interface Props {
  id: string;
  expanded: any;
  setExpanded: (isOpen: any) => void;
}

interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

const initialStory = {
  by: "",
  descendants: 0,
  id: 0,
  kids: [],
  score: 0,
  time: 0,
  title: "",
  type: "",
  url: "",
};

const variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0, when: "afterChildren" },
};

const Story: React.FC<Props> = ({ id, expanded, setExpanded }) => {
  const [story, setStory] = useState<Story>(initialStory);
  const isOpen = id === expanded;

  useEffect(() => {
    getStoryById(id)
      .then(({ data }: { data: Story }) => setStory(data))
      .catch((error: any) => console.log(error));
  }, [id]);

  return (
    <Container initial={false} onClick={() => setExpanded(isOpen ? false : id)}>
      <Content>
        <Activity>
          <Points>
            <Count>{story.score}</Count>
            <Sub>Points</Sub>
          </Points>
          <TotalComments>
            <Count>{story.descendants}</Count>
            <Sub>Comments</Sub>
          </TotalComments>
        </Activity>
        <Information>
          <Title href={story.url} target="_blank">
            {story.title}
          </Title>
          <Details>
            <Detail>
              <Icon className="fas fa-user" />
              <Text>{story.by}</Text>
            </Detail>
            <Detail>
              <Icon className="fas fa-clock" />
              <Text>{getTime(story.time)}</Text>
            </Detail>
          </Details>
        </Information>
      </Content>

      <AnimatePresence initial={false}>
        {isOpen && (
          <CommentsContainer
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
          >
            {story.kids && <Comments comments={story.kids} />}
          </CommentsContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Story;

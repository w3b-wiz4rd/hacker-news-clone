import React, { useState, useEffect } from "react";
/* API */
import { getStories } from "api/stories";
/* Components */
import Header from "./Header";
import Story from "components/Story";
/* Hooks */
import { useInfiniteScroll } from "hooks/useInfiniteScroll";
/* Styled */
import { Container, Content } from "./styled";

const Home: React.FC = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<false | number>(0);

  useEffect(() => {
    getStories()
      .then(({ data }: { data: string[] }) => setStoryIds(data))
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {storyIds.slice(0, count).map((id) => (
          <Story
            key={id}
            id={id}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Home;

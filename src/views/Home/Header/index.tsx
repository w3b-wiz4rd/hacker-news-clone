import React from "react";
/* Styled */
import { Container, Content, Logo } from "./styled";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo
          src="https://news.ycombinator.com/favicon.ico"
          alt="Hacker News Clone"
        />
        Hacker News Clone
      </Content>
    </Container>
  );
};

export default Header;

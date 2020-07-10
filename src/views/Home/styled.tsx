import styled from "styled-components";

export const Container = styled.div`
  /* Display & Box Model */
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  /* Styling */
  background: #f8fafb;
`;

export const Content = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  /* Text */
  font-size: 2.5rem;
`;

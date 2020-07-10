import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  /* Display & Box Model */
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 1rem;
  margin-bottom: 1rem;
  /* Styling */
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* Other */
  cursor: pointer;
  &:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    transform: scale(1.01);
  }
`;

export const Content = styled(motion.div)`
  /* Display & Box Model */
  width: 100%;
  display: flex;
`;

export const Activity = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  margin-right: 2rem;
  /* Styling */
  border-right: 2px solid grey;
`;

export const Information = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
`;

export const Details = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const Detail = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  margin-right: 1.5rem;
`;

export const Icon = styled(motion.i)`
  /* Display & Box Model */
  font-size: 1.5rem;
  margin-right: 1rem;
  /* Styling */
  color: grey;
`;

export const Text = styled(motion.p)`
  /* Styling*/
  color: grey;
  /* Text */
  font-size: 1.5rem;
`;

export const Points = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;

export const TotalComments = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;

export const Count = styled(motion.h1)`
  /* Style */
  color: #fb651c;
  /* Text */
  font-size: 2.5rem;
`;

export const Sub = styled(motion.h2)`
  /* Style */
  color: #504f4f;
  /* Text */
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const Title = styled(motion.a)`
  /* Style */
  color: #504f4f;
  text-decoration: none;
  /* Text */
  font-size: 2.5rem;
  font-weight: bold;
`;

export const CommentsContainer = styled(motion.div)`
  /* Display & Box Model */
  max-height: 50rem;
  overflow: scroll;
`;

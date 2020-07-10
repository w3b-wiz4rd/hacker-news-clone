import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  /* Display & Box Model */
  padding: 1.5rem;
`;
export const Information = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
  flex-flow: column;
`;

export const Details = styled(motion.div)`
  /* Display & Box Model */
  display: flex;
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

export const CommentBody = styled(motion.p)`
  /* Styling*/
  color: grey;
  /* Text */
  font-size: 1.4rem;
`;

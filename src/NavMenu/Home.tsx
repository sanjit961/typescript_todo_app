import React from "react";
import { Container, Card, Col, Button, Row } from "react-bootstrap";
import styled from "styled-components";
const StyledDiv = styled.div`
  height: 100vh;
  background-color: black;
`;
export const Home: React.FC = () => {
  return (
    <StyledDiv>
      <h2 className="text-light text-center">Welcome to My World!</h2>
    </StyledDiv>
  );
};

export default Home;

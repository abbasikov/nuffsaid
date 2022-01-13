import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #000;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
`;

const Header: React.FC<{}> = () => {
  return (
    <Nav>
      <Title>nuffsaid.com Coding Challange</Title>
    </Nav>
  );
}

export default Header;
import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { styled as MuiStyles } from "@mui/system";
import { unSubscribe } from "../../Api";

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const MuiButton = MuiStyles(Button)`
  background-color: #88FCA3;
  color: #000;
  cursor: pointer;
  z-index: 2;
  margin-left: 2px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
  height: 24px;
  font-weight: bold;
  font-size: 12px
`;

const Actions = ({clearMessages}: any) => {

  return (
    <FlexDiv>
      <MuiButton onClick={unSubscribe}>Stop</MuiButton>
      <MuiButton onClick={clearMessages}>Clear</MuiButton>
    </FlexDiv>
  );
}

export default Actions;
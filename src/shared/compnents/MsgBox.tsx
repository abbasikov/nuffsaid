import styled from "styled-components";

interface Props {
  message: string;
  background: string;
  clearOne: any;
}

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
`;
const Clear = styled.a`
  position: absolute;
  font-size: 12px;
  right: 5px;
  bottom: 5px;
  cursor: pointer;
`;

const MessageDiv: any = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${(props: any) => props.bg};
  position: relative;
  height: 70px;
  border-radius: 2px;
  padding: 10px;
  margin: 10px 5px;
  box-shaow: 0 0 15px 0 black;
`;

const MsgBox: React.FC<Props> = ({ message, background, clearOne }) => {
  return (
    <MessageDiv bg={background}>
      <Title>{message}</Title>
      <Clear onClick={() => clearOne(message)}>clear</Clear>
    </MessageDiv>
  );
};

export default MsgBox;

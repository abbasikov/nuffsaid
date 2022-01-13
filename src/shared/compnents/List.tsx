import styled from "styled-components";
import MsgBox from "./MsgBox";

interface Props {
  title: string;
  messages: any;
  priority: number;
  clearOne: any;
}

const ListDiv = styled.div`
  align-items: center;
  margin-top: 10px;
  width: 32%;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-left: 2%;
`;

const Count = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 2%;
`;

const List: React.FC<Props> = ({title, messages, priority, clearOne}) => {
  let color = "#F56236";
  if (priority === 1) color = "#FCE788";
  if (priority === 2) color = "#88FCA3";

  const length = messages.filter(
    (msg: any) => msg.priority === priority
  ).length;

  return (
    <ListDiv>
      <Title>{title}</Title>
      <Count>Count {length}</Count>

      {messages?.map?.((msg: any) =>
        msg.priority === priority ? (
          <div key={msg?.message}>
            <MsgBox
              message={msg?.message}
              background={color}
              clearOne={clearOne}
            />
          </div>
        ) : null
      )}
    </ListDiv>
  );
};

export default List;

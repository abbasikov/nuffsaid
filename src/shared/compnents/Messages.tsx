import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import generateMessage, { Message } from "../../Api";
import Actions from "./Actions";
import List from "./List";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 10px;
  padding: 5% 10%;
`;

const Messages: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages((oldMessages) => [message, ...oldMessages]);
    });
    return cleanUp;
  }, [setMessages]);

  const RemoveOne = (target: any) => {
    console.log(target);
    setMessages((prev) => prev.filter((msg) => msg?.message !== target));
  };

  return (
    <>
      <Actions clearMessages={() => setMessages([])} />
      <FlexDiv>
        <List
          title={`Error Type 1`}
          messages={messages}
          priority={0}
          clearOne={RemoveOne}
        />
        <List
          title={`Warning Type 2`}
          messages={messages}
          priority={1}
          clearOne={RemoveOne}
        />
        <List
          title={`Info Type 3`}
          messages={messages}
          priority={2}
          clearOne={RemoveOne}
        />
      </FlexDiv>
    </>
  );
};

export default Messages;

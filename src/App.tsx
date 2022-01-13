import React from "react";
import Header from "./shared/compnents/Header";
import Messages from "./shared/compnents/Messages";
import "./shared/css/styles.css";

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Messages />
    </>
  );
};

export default App;

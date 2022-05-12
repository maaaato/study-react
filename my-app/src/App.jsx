import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  }

  return (
    <>
      <h1>hello</h1>
      <ColoredMessage>hoge</ColoredMessage>
      <p>how are you</p>
      <button onClick={onClickButton}>button</button>
      <p>{num}</p>
    </>
  );
};

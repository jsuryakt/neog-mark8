import "./styles.css";
import React, { useState } from "react";
import emoji from "emoji";

export default function App() {
  const [out, setOutput] = useState("enter an emoji or choose from below");

  const emojiDic = emoji["EMOJI_MAP"];

  const emojisWeKnow = Object.keys(emojiDic);

  function handleInput(event) {
    if (event.target.value === "") {
      setOutput("enter an emoji or choose from below");
    } else if (emojiDic[event.target.value] === undefined) {
      setOutput("Sorry I don't understand");
    } else {
      setOutput(emojiDic[event.target.value][1]);
    }
  }

  function handleEmojiClick(emoji) {
    if (emojiDic[emoji] === undefined) {
      setOutput("Sorry I don't understand");
    } else {
      setOutput(emojiDic[emoji][1]);
    }
  }

  return (
    <div className="App">
      <h1>emoji inside out</h1>

      <input id="input" onChange={handleInput} />

      <div id="output">{out}</div>
      <div className="container">
        {emojisWeKnow.map(function (emoji) {
          return (
            <p className="emojiSpam" onClick={() => handleEmojiClick(emoji)}>
              {emoji}
            </p>
          );
        })}
      </div>
    </div>
  );
}

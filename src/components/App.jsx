import React from "react";
import emojiPedia from "../emojipedia";
import Entry from "./Entry";
import createEmojiPedia from "./Emojidictionary";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojiPedia.map(createEmojiPedia)}
    </div>
  );
}

export default App;

import React from "react";
import Entry from "./Entry"

function createEmojiPedia(emojiDictionary) {
    return (
      <Entry
        key={emojiDictionary.id}
        emoji={emojiDictionary.emoji}
        name={emojiDictionary.name}
        message={emojiDictionary.meaning}
      />
    );
  }

  export default createEmojiPedia;
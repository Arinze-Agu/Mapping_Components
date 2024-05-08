import React from "react";

function Entry(props) {
  return (
    <div>
      <div>
        <dl className="dictionary">
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
              </span>
              <span>{props.name}</span>
            </dt>
            <dd>{props.message}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Entry;

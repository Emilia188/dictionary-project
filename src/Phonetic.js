import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return <i className="phonetic">[{props.phonetic}]</i>;
  } else {
    return null;
  }
}

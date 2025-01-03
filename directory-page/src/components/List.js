import React from "react";

function Project({ name, link }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  );
}

export default Project;

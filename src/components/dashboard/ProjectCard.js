import "./ProjectCard.css";
import React, { memo } from "react";
const ProjectCard = (props) => {
  return (
    <div className="card">
      <p className="card__exit">
        <i className="fas fa-times">Title -</i>
      </p>
      <div className="card__icon">
        <i className="fas fa-bolt">{props.title}</i>
      </div>

      <p className="card__exit">
        <i className="fas fa-times">Technology -</i>
      </p>
      <div className="card__icon">
        <i className="fas fa-bolt">{props.technology}</i>
      </div>
    </div>
  );
};
export default memo(ProjectCard);

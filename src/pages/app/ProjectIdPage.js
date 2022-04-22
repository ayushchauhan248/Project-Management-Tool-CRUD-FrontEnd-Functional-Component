import React, { useEffect } from "react";
import { getOneProjectAction } from "../../redux/actions/project";
import "./ProjectDetails.css";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProjectIdPage = (props) => {
  const oneProject = useSelector((state) => state.projectItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProjectAction(props.id));
  }, []);

  return (
    <div id="maindiv">
      <div id="mainh">PROJECT DETAILS</div>
      <div className="oneBox">
        <div className="heading">Title</div>
        <div className="detail">{oneProject?.one?.title}</div>
      </div>
      <div className="oneBox">
        <div className="heading">Technology</div>
        <div className="detail">{oneProject?.one?.technology}</div>
      </div>
      <div className="oneBox">
        <div className="heading">Deadline</div>
        <div className="detail">{oneProject?.one?.deadline}</div>
      </div>
      <div className="oneBox">
        <div className="heading">Description</div>
        <div className="detail">{oneProject?.one?.description}</div>
      </div>
    </div>
  );
};
export default memo(ProjectIdPage);

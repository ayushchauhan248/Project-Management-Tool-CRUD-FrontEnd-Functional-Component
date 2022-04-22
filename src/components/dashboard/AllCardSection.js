import ProjectCard from "./ProjectCard";
import "./AllCardSection.css";
import {
  deleteProjectAction,
  getProjectAction,
} from "../../redux/actions/project";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { memo } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllCardSection = (props) => {
  const projects = useSelector((state) => state.projectItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectAction());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProjectAction(id));
    alert("Click OK to delete");
    window.location.reload();
  };

  return (
    <div id="allcard">
      <div id="head">ALL PROJECTS </div>
      <Link to="/create" className="create">
        <BsPlusLg></BsPlusLg>
      </Link>
      {projects?.projectData
        ?.slice(0)
        .reverse()
        .map((res, i) => {
          return (
            <div id="proDiv">
              <ProjectCard
                title={res.title}
                technology={res.technology}
              ></ProjectCard>
              <div id="cardButtonSections">
                <Link to={`/project/${res._id}`} className="every linkClass">
                  <button className="btndash">View</button>
                </Link>
                <Link to={"/edit/" + res._id} className="every linkClass">
                  <button className="btndash">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(res._id)}
                  className="btndash linkClass"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default memo(AllCardSection);

import React, { useEffect, useState } from "react";
import {
  getOneProjectAction,
  updateProject,
} from "../../redux/actions/project";
import "./CreateProject.css";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

const EditPage = (props) => {
  const oneProject = useSelector((state) => state.projectItems);
  const dispatch = useDispatch();
  const [projectOne, setProjectOne] = useState({
    id: props.id,
    title: oneProject?.one?.title,
    technology: "",
    deadline: "",
    description: "",
  });

  useEffect(() => {
    dispatch(getOneProjectAction(props.id));
  }, []);

  useEffect(() => {
    setProjectOne({
      ...projectOne,
      title: oneProject?.one?.title,
      technology: oneProject?.one?.technology,
      deadline: oneProject?.one?.deadline,
      description: oneProject?.one?.description,
    });
  }, [oneProject.one]);
  console.log("check it now", oneProject?.one);

  const handleChange = (e) => {
    setProjectOne({
      ...projectOne,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Id", props.id);
    dispatch(updateProject(projectOne));
    setTimeout(() => {
      window.location = "/dashboard";
      alert("Your Project Is Updated");
    }, 1000);
  };
  return (
    <div className="creatediv">
      <div id="headi">EDIT PROJECT</div>
      <form onSubmit={handleSubmit} id="formc">
        <div id="two">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="title"
            value={projectOne.title}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            id="techno"
            name="technology"
            placeholder="Technology "
            className="title"
            autoComplete="off"
            value={projectOne.technology}
            onChange={handleChange}
          />
        </div>
        <div id="three">
          <input
            type="text"
            id="deadline"
            name="deadline"
            placeholder="Deadline "
            className="title"
            autoComplete="off"
            value={projectOne.deadline}
            onChange={handleChange}
          />
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description "
            className="title"
            autoComplete="off"
            value={projectOne.description}
            onChange={handleChange}
          />
        </div>
        <div id="four">
          <button type="submit" id="subBut">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(EditPage);

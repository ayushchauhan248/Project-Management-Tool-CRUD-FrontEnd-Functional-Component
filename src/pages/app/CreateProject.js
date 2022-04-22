import "./CreateProject.css";
import { memo, useState } from "react";
import { setprojectAction } from "../../redux/actions/project";
import { useDispatch } from "react-redux";

const CreateProject = (props) => {
  const intiProject = {
    title: "",
    technology: "",
    deadline: "",
    description: "",
  };

  const [project, setProject] = useState(intiProject);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const projectSave = {
      title: project.title,
      technology: project.technology,
      deadline: project.deadline,
      description: project.description,
    };
    console.log(project);
    e.preventDefault();
    dispatch(setprojectAction(projectSave));
    setTimeout(() => {
      window.location.href = "/dashboard";
      alert("Your Project Created Successfully");
    }, 1000);
  };
  const { title, technology, deadline, description } = project;
  const enabled =
    title.length > 0 &&
    technology.length > 0 &&
    deadline.length > 0 &&
    description.length > 0;
  console.log(enabled);
  return (
    <div className="creatediv">
      <div id="headi">+ CREATE PROJECT</div>
      <form onSubmit={handleSubmit} id="formc">
        <div id="two">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Project Title"
            className="title"
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
            onChange={handleChange}
          />
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description "
            className="title"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div id="four">
          <button disabled={!enabled} type="submit" id="subBut">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default memo(CreateProject);

import React, { useContext, useState } from "react";
import noteContext from "../context/Notes/NoteContext";

const AddNotes = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
    status: "Initialzed"
  });
  let style ={
    color : props.mode === "dark" ?"white" :"black"
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag, note.status);
    setNote({ title: "",
    description: "",
    tag: ""})
    alert("Note is added successfuly");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-3 p-3" style={style}>
      <h2>Add Notes</h2>
      <form className="container my-3 mt-auto" onSubmit={onSubmitHandler} >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            onChange={onChange}
            required
            value={note.title}
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            required
            value={note.description}
            minLength={8}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            required
            value={note.tag}
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Select state of task
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="status"
            onChange={onChange}
            id="status"
            required
          >
            <option  defaultValue>Initialzed</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Partial">Partial</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary"  >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNotes;

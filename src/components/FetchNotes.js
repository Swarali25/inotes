import React, { useState, useContext, useEffect, useRef } from "react";
import noteContext from "../context/Notes/NoteContext";
import NoteItem from "../components/NotesItem";

const FetchNotes = (props) => {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  const [note, setNote] = useState({
    eid: "",
    etitle: "",
    edescription: "",
    etag: "",
    estatus: "Initialzed",
  });
  const ref = useRef(null);
  let style ={
    color : props.mode === "dark" ?"white" :"black"
  }
  useEffect(() => {
    if (localStorage.getItem("Notes")) {
      getAllNotes();
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      eid: currentNote.id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      estatus: currentNote.status,
    });
  };
  const onClickHandler = (e) => {
    e.preventDefault();

    editNote(note.etitle, note.edescription, note.etag, note.estatus, note.eid);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-2">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        ref={ref}
        style={{ display: "none" }}
      ></button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="container my-3 mt-auto"
                
              >
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    name="etitle"
                    onChange={onChange}
                    required
                    value={note.etitle}
                    minLength={5}
                  />
                  <div className="text-muted h6">Minimum of 5 characters</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    required
                    value={note.edescription}
                    minLength={8}
                  />
                  <div className="text-muted h6">Minimum of 8 characters</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    required
                    value={note.etag}
                    minLength={3}
                    
                  />
                   <div className="text-muted h6">Minimum of 3 characters</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="estatus" className="form-label">
                    Select state of task
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="estatus"
                    onChange={onChange}
                    id="estatus"
                    required
                    value={note.estatus}
                  >
                    <option value="Initialzed">Initialzed</option>
                    <option value="Inprogress">Inprogress</option>
                    <option value="Partial">Partial</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {note.edescription.length <8 && note.etag.length <3}
              <button type="button" className="btn btn-primary mx-3"  data-bs-dismiss="modal" disabled={note.etitle.length <5 || note.edescription.length <8 || note.etag.length <3} onClick={onClickHandler}>
                Update
              </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* To display all notes */}
      <h2 className="text-center my-2" style={style}>Your Notes </h2>
      {(!localStorage.getItem("Notes") ||
        localStorage.getItem("Notes").length === 2) && (
        <h2>
          You have not added any notes. Please add some notes to see here.
        </h2>
      )}
      <div className="row my-2">
        {notes.map((note) => {
          return <NoteItem note={note} key={note.id} updateNote={updateNote} />;
        })}
      </div>
    </div>
  );
};

export default FetchNotes;

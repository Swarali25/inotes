import React, { useContext ,useEffect} from "react";
import noteContext from "../context/Notes/NoteContext";
import NoteItem from "../components/NotesItem";
const FavNotes = (props) => {
  const context = useContext(noteContext);
  const { notes, getAllNotes} = context;
  let style ={
    color : props.mode === "dark" ?"white" :"black"
  }
  useEffect(() => {
    if (localStorage.getItem("Notes")) {
      getAllNotes();
    }
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="text-center my-2" style={style}>Your Favourite Notes </h2>
        <div className="row my-2">
          {notes.map((note) => {
            if(note.favorite)
            {
            return <NoteItem note={note} key={note.id} favNote={true}/>;
            }
            return "";
          })}
        </div>
      </div>
    </>
  );
};

export default FavNotes;

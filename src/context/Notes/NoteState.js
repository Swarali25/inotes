import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  const getAllNotes = () => {
    setNotes(JSON.parse(localStorage.getItem("Notes")));
  }
  const addNote =(title,description,tag,taskState = "Initialzed") =>{
      const newNote = {
        title:title,
        description:description,
        tag:tag,
        status: taskState,
        id:generateId(),
        createdDate: new Date().toString(),
        favorite: false
      }
      let newNotesList = notes;
      newNotesList =newNotesList.concat(newNote)
      setNotes(newNotesList);
      localStorage.setItem("Notes", JSON.stringify(newNotesList));
  }

  function generateId(){
      let id = '#'+new Date().toString()+"NOTE"
      return id;
  }

  const deleteNote =async (noteId) =>
  {
     let newNotes =await JSON.parse(localStorage.getItem("Notes")) ;
     newNotes =newNotes.filter((note)=>{
      return note.id !== noteId
     })
     setNotes(newNotes);
     localStorage.setItem("Notes", JSON.stringify(newNotes));
  }

  const editNote = async(etitle,edescription,etag,estatus,eid)=>{
    let newNotes =await JSON.parse(localStorage.getItem("Notes")) ;
     for(let i=0;i<newNotes.length;i++)
     {
        const element = newNotes[i];
        if(element.id === eid)
        {
          newNotes[i]["title"]=etitle;
          newNotes[i]["description"] =edescription;
          newNotes[i]["tag"]=etag;
          newNotes[i]["status"]=estatus;
          break;
        }
     }
     setNotes(newNotes);
     localStorage.setItem("Notes", JSON.stringify(newNotes));
  }

  const noteFavorite = async(noteId,favorite)=>{
    let newNotes =await JSON.parse(localStorage.getItem("Notes")) ;
     for(let i=0;i<newNotes.length;i++)
     {
        const element = newNotes[i];
        if(element.id === noteId)
        {
          favorite === true? newNotes[i]["favorite"]=false:newNotes[i]["favorite"]=true;
          break;
        }
     }
     setNotes(newNotes);
     localStorage.setItem("Notes", JSON.stringify(newNotes));
  }
  return (
    <NoteContext.Provider value={{ notes: notes, addNote:addNote,deleteNote:deleteNote,getAllNotes:getAllNotes,editNote:editNote,noteFavorite:noteFavorite}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

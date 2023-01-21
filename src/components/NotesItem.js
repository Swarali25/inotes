import React ,{useContext} from "react";
import noteContext from "../context/Notes/NoteContext";

const NotesItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote,noteFavorite}=context;
  const { title, description, tag, status, createdDate ,id,favorite} = props.note;
  
  return (
    <div className="col-md-4 col-sm-6 my-2">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0
          }}
        >
          <span className="badge rounded-pill bg-danger">{tag}</span>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between" >
            <h5 className="card-title">{title}</h5>
            {!props.favNote ?
            <div>
            
            <i className="fa-regular fa-pen-to-square mx-1" onClick = {
              ()=>{
                props.updateNote(props.note)
              }
            }></i>
            <i className={`fa-${favorite === false ? "regular":"solid"} fa-heart`} onClick={()=>{noteFavorite(id,favorite)}}></i>
            <i className="fa-sharp fa-solid fa-trash mx-1" onClick={()=>{
              deleteNote(id)
            }}></i> 
      
            </div>:""}
          </div>

          <p className="card-text">{description}</p>
          <div>
          <h6>{status}</h6>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
             created on {new Date(createdDate).toGMTString()}
          </small>
        </div>
      </div>
    </div>

    
          
  );
};

export default NotesItem;

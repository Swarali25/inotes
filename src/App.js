import "./App.css";
import FetchNotes from "./components/FetchNotes";
import FavNotes from "./components/FavNotes";
import About from "./components/About";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import NoteState from "./context/Notes/NoteState";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from "react";

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = ()=>{
     console.log("toggleMode")
     if(mode === "light"){
       document.body.style.backgroundColor="#4b4646";
       setMode("dark");
     }
     else{
      document.body.style.backgroundColor="white";
       setMode("light");
     }
  }
  return (
    <>
     <NoteState>
      <Router>
      
        <div className="d-flex flex-md-row flex-lg-row flex-xl-row flex-sm-column app">
          <Navbar toggleMode={toggleMode} mode={mode}/>
          
          <Routes>
            <Route exact path="/" element={<Notes mode={mode}/>}></Route>
            <Route exact path="/fetchNotes" element={<FetchNotes mode={mode} />}></Route>
            <Route exact path="/favNotes" element={<FavNotes mode={mode}/>}></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
          
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

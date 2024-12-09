import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Search from './components/Search';

const llistaInicialNotes = localStorage.getItem("notes-app-data") ? 
  JSON.parse(localStorage.getItem("notes-app-data")) : 
  [
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/04/2021"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/04/2021"
    }
  ];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchNote, setSearchNote] = useState("");
  const [notes, setNotes] = useState(() => {
    const notesDesades = JSON.parse(localStorage.getItem("notes-app-data"));
    return notesDesades || llistaInicialNotes;
  });

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  function addNote(text){
    setNotes([...notes,
      {
        id: nanoid(),
        text: text,
        date: new Date().toLocaleDateString()
      }
    ]);
  }
  function deleteNote(id){
    setNotes(notes.filter(note => note.id !== id));
  }
  return (
    <div className={darkMode && "dark-mode"}>
      <div className="container">
        <Header handleDarkMode = {setDarkMode} darkMode = {darkMode}/>
        <Search handleSearchNote = {setSearchNote}/>
        <NotesList notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchNote.toLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}
import './App.css';
import React, {useState} from "react";
import {notes, scales} from "./data";
import findNotesToDisplay from "./services/findNotesToDisplay";
import Select from "./components/Select";

function App() {
  const noteOptions = notes.map(note => <option key={note} value={note}>{note}</option>);
  const scaleOptions = scales.map(currentScale => <option key={currentScale.name} value={currentScale.name} >{currentScale.name}</option>);

  const [rootNote, setRootNote] = useState(notes[0]);
  const [scale, setScale] = useState(scales[0]);

  const handleScaleChange = (newScale) => setScale(scales.find(s => s.name === newScale));

  const handleRootNoteChange = (newRootNote) => setRootNote(newRootNote);

  return (
    <div className="App">
      <main>
        <Select
            label="Root Note"
            fieldName = "rootNote"
            defaulValue = {rootNote}
            options={noteOptions}
            onChangeHandler={handleRootNoteChange}
        />
        <Select
            label="Scale"
            fieldName = "scale"
            defaulValue = {rootNote.name}
            options={scaleOptions}
            onChangeHandler={handleScaleChange}
        />
        <p>{findNotesToDisplay(rootNote, scale).map(note => <p>{note}</p>)}</p>
      </main>
    </div>
  );
}

export default App;

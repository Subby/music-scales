import './App.css';
import React, {useState} from "react";
import {notes, scales} from "./data";
import findNotesToDisplay from "./services/findNotesToDisplay";

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
        <label htmlFor="rootNote">Root note</label>

        <select name="rootNote" id="rootNote" value={rootNote} onChange={(e) => handleRootNoteChange(e.target.value)}>
          {noteOptions}
        </select>
        <label htmlFor="Scale">Scale</label>

        <select name="scale" id="scale" value={scale.name} onChange={(e) => handleScaleChange(e.target.value)}>
          {scaleOptions}
        </select>

        <p>{findNotesToDisplay(rootNote, scale).map(note => <p>{note}</p>)}</p>
      </main>
    </div>
  );
}

export default App;

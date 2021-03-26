import './App.css';
import React, {useState} from "react";
import {notes, scales} from "./data";

function App() {
  const noteOptions = notes.map(note => <option key={note} value="{note}">{note}</option>);
  const scaleOptions = scales.map(scale => <option key={scale.name} value="{scale.name}">{scale.name}</option>);

  const [rootNote, setRootNote] = useState(notes[0]);

  return (
    <div className="App">
      <main>
        <label htmlFor="rootNote">Root note</label>

        <select name="rootNote" id="rootNote">
          {noteOptions}
        </select>
        <label htmlFor="Scale">Scale</label>

        <select name="scale" id="scale">
          {scaleOptions}
        </select>

        <p>Notes</p>
      </main>
    </div>
  );
}

export default App;

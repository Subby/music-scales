import {notes} from "../data";

const findNotesToDisplay = (rootNote, scale) => {
    let noteSum = notes.indexOf(rootNote);
    const scaleIntervals = scale.intervals;
    const calculatedNotes = [rootNote];
    scaleIntervals.forEach(interval => {
        noteSum = noteSum + interval;
        calculatedNotes.push(notes[noteSum % notes.length])
    });
    return calculatedNotes;
};

export default findNotesToDisplay;
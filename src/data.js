const HALF = 1;
const WHOLE = 2;

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const scales = [
    {   name: "minor",
        intervals: [WHOLE, HALF, WHOLE, WHOLE, HALF, WHOLE, WHOLE]
    }
]

export {notes, scales}
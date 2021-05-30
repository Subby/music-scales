const HALF = 1;
const WHOLE = 2;

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const scales = [
    {
        name: "major",
        intervals: [WHOLE, WHOLE, HALF, WHOLE, WHOLE, WHOLE]
    },
    {   name: "minor natural",
        intervals: [WHOLE, HALF, WHOLE, WHOLE, HALF, WHOLE]
    },
    {   name: "minor melodic",
        intervals: [WHOLE, HALF, WHOLE, WHOLE, HALF + HALF, WHOLE]
    },
    {   name: "minor harmonic",
        intervals: [WHOLE, HALF, WHOLE, WHOLE, HALF + HALF, WHOLE]
    },
];
const progressions = [
    //minor
    //i-iv-v
    [0, 3, 4],
    //i–ii dim–V–i
    [0, 2, 4, 0],
    //i–VI–III–VII
    [0, 5, 2, 6]
];

export {notes, scales}
import findNotesToDisplay from "./services/findNotesToDisplay";
import {notes, scales} from "./data";

describe("correct notes are calculated", () => {
  test('correct notes are calculated for C Major', async () =>{
    const rootNote = notes[0];
    expect(findNotesToDisplay(rootNote, scales[0])).toEqual(["C","D","E","F","G","A","B", "C"]);
  });
  test('correct notes are calculated for C Minor', async () =>{
    const rootNote = notes[0];
    expect(findNotesToDisplay(rootNote, scales[1])).toEqual(["C","D","D#","F","G","G#","A#", "C"]);
  });
});

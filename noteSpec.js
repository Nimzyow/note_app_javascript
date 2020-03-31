describe("note.js", () => {
  let note = new MakeNote("Beautiful text!");
  context("Can create note with text of Beautiful text!", () => {
    assert.includes(note, "Beautiful text!");
  });
});

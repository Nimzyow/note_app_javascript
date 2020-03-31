describe("note.js", () => {
  let note = new Note("Beautiful text!");
  context("Can create note with text of Beautiful text!", () => {
    assert.includes(note, "Beautiful text!");
  });
});

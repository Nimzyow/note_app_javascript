describe("note.js", () => {
  let note = new Note("Beautiful text!", 1);
  context("Can create note with text of Beautiful text!", () => {
    assert.includes(note, "Beautiful text!");
  });
  context("instantiates with 1 as id", () => {
    assert.isTrue(note.id === 1);
  });
});

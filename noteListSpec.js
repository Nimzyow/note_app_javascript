describe("noteListSpec.js", () => {
  context("start up with an empty array", () => {
    let listNote = new NoteList();
    assert.isSameLength(listNote.list.length, 0);
  });
  context("add a note", () => {
    let note = new Double("double", [{ text: "my message" }]);
    let listNote = new NoteList();
    listNote.createAndStoreNote("This is a great note", note);
    assert.isTrue(listNote.list[0].text === "This is a great note");
  });
});

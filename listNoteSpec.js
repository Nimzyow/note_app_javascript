describe("noteListSpec.js", () => {
  describe("start up with an empty array", () => {
    let listNote = new ListNote();
    assert.isSameLength(listNote.list.length, 0);
  });
  describe("add a note", () => {
    let note = new Double("double", [{ text: "my message" }]);
    let listNote = new ListNote();
    listNote.createAndStoreNote("This is a great note", note);
    assert.isTrue(listNote.list[0].text === "This is a great note");
  });
});

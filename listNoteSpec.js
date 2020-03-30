describe("noteListSpec.js", () => {
  let listNote = new ListNote();
  describe("start up with an empty array", () => {
    assert.isSameLength(listNote.list.length, 0);
  });
});

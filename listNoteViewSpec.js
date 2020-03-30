describe("listNoteView", () => {
  let listNote = new ListNote();
  let double = new Double("double", { text: "" });
  listNote.createAndStoreNote("this is a message", double);
  //create new ListNoteView and we will pass the
  let listNoteView = new ListNoteView(listNote);
  describe("#viewNote returns list in html form", () => {
    console.log(listNoteView.viewNote());
    assert.isTrue(
      listNoteView.viewNote() ===
        "<ul><li><div>this is a message</div></li></ul>"
    );
  });
});

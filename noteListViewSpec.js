describe("listNoteView", () => {
  let listNote = new NoteList();
  let double = new Double("double", { text: "" });
  let double2 = new Double("double2", { text: "" });

  listNote.createAndStoreNote("this is a message", double);
  listNote.createAndStoreNote("another message", double2);
  //create new ListNoteView and we will pass the
  let listNoteView = new ListNoteView(listNote);
  context("#viewNote returns list in html form", () => {
    console.log(listNoteView.viewNote());
    assert.isTrue(
      listNoteView.viewNote() ===
        "<ul><li><div>this is a message</div></li><li><div>another message</div></li></ul>"
    );
  });
  context(
    "#reduceText limits notes of more than 20 characters to 20 characters only",
    () => {
      let message =
        "look at this message as I go on and on and on and this is ridiculous how much further can i continue?";
      assert.isTrue(
        listNoteView.reduceText(message) === "look at this message..."
      );
    }
  );
});

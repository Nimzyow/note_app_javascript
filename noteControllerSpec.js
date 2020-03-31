let double = new Double("listNoteMock", {
  createAndStoreNote: "",
  list: [{ text: "hi there" }, { text: "bonjour" }]
});
let noteController = new NoteController(double);

describe("noteController.js", () => {
  context("can be instantiated", () => {
    assert.isInstanceOf(noteController, NoteController);
  });
  context("app element contains correct HTML", () => {
    let app = document.getElementById("app");
    noteController.insertNote();
    assert.isTrue(
      app.innerHTML ===
        "<ul><li><div>hi there</div></li><li><div>bonjour</div></li></ul>"
    );
  });
});

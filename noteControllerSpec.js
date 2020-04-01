let double = new Double("noteListMock", {
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
    let expectedString =
      '<ul><li><div id="0">hi there</div></li><li><div id="1">bonjour</div></li></ul>';
    noteController.insertNote();
    assert.isTrue(app.innerHTML === expectedString);
    app.innerHTML = "";
  });
});

let double = new Double("noteListMock", {
  createAndStoreNote: "",
  list: [{ text: "hi there" }, { text: "bonjour" }]
});
let nC = new NoteController(double);

describe("noteController.js", () => {
  context("can be instantiated", () => {
    assert.isInstanceOf(nC, NoteController);
  });
  context("app element contains correct HTML", () => {
    let app = document.getElementById("app");
    let expectedString =
      '<ul><li><div id="0"><a href="#note0">hi there</a></div></li><li><div id="1"><a href="#note1">bonjour</a></div></li></ul>';
    nC.insertNote();
    assert.isTrue(app.innerHTML === expectedString);
    app.innerHTML = "";
  });
  context("clicking on first link will take you to the correct link", () => {
    nC.insertNote();
    document.getElementById("2").click();
    let hash = window.location.hash;
    assert.isTrue(hash === "#note2");
    app.innerHTML = "";
    document.getElementById("main").innerHTML = "";
  });
});

let noteListMock = new Double("noteListMock", {
  createAndStoreNote: "",
  list: [
    {
      text: "hi there this is a test that goes on and one",
      id: 0,
      getText: function() {
        return "hi there this is a test that goes on and one";
      }
    },
    {
      text: "bonjour",
      id: 1,
      getText: function() {
        return "bonjour";
      }
    }
  ]
});

function NoteListViewMock(noteList) {
  this.noteList = noteList;
}

NoteListViewMock.prototype.viewNote = function() {
  return "";
};

let noteListViewMock = new NoteListViewMock(noteListMock);
console.log(noteListViewMock);
let nC = new NoteController(noteListMock, noteListViewMock);
describe("noteController.js", () => {
  context("can be instantiated", () => {
    assert.isInstanceOf(nC, NoteController);
  });
  context("app element contains correct HTML", () => {
    let app = document.getElementById("app");
    let expectedString =
      '<ul><li><div id="0"><a href="#note0">hi there this is a t...</a></div></li><li><div id="1"><a href="#note1">bonjour</a></div></li></ul>';
    nC.noteListView.viewNote = function() {
      return expectedString;
    };
    nC.insertNote();
    assert.isSame(app.innerHTML, expectedString);
  });
  context("clicking on first link will take you to the correct link", () => {
    document.getElementById("1").click();
    let hash = window.location.hash;
    assert.isSame(hash, "#note1");
  });
  // Bottom test experimenting with DOM manipulation
  // context(
  //   "clicking on first link will show you the full text of first link",
  //   () => {
  //     nC.insertNote();
  //     let display = document.getElementById("main");
  //     document.getElementById("0").click();

  //     console.log(display.innerHTML);
  //     console.log(display.innerHTML);
  //     console.log(document.getElementById("0"));
  //     console.log(display.innerHTML);
  //     assert.isTrue(
  //       display.innerHTML === "hi there this is a test that goes on and one"
  //     );
  //     //app.innerHTML = "";
  //     //document.getElementById("main").innerHTML = "";
  //   }
  // );
  let app = document.getElementById("app");
  app.innerHTML = "";
  document.getElementById("main").innerHTML = "";
  document.getElementById("text").innerHTML = "";
});

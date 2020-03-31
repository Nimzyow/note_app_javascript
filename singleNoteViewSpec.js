describe("singleNoteView.js", () => {
  context("can create an instance of singleNoteView", () => {
    let singleNoteView = new SingleNoteView();
    assert.isTrue(singleNoteView instanceof SingleNoteView);
  });

  context("can make a single note appear", () => {
    function MockNote() {
      return {
        getText: () => {
          return "Favourite drink: seltzer";
        }
      };
    }
    let mockNote = new MockNote();
    let singleNoteView = new SingleNoteView(mockNote);
    let expectedString = "<div>Favourite drink: seltzer</div>";
    assert.isTrue(singleNoteView.viewNote() === expectedString);
  });
});

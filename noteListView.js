(function(exports) {
  function noteListView(noteList) {
    this.nodeList = noteList;
  }

  noteListView.prototype.createHTMLString = function () {
    let body = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
    let x = this.nodeList.map(note => {
      return (
        `<div>${this.nodeList.text}</div>`
      );
    });
  };
});

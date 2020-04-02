(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.COUNT = 0;
  }

  NoteListView.prototype.viewNote = function() {
    console.log(this.noteList);
    let stringToPlace = null;

    this.noteList.list.map(note => {
      let reducedText = this.reduceText(note.text);
      if (stringToPlace == null) {
        //stringToPlace = `<li><a href="#${this.COUNT}">${reducedText}</a></li>`;
        stringToPlace = `<li><div id="${this.COUNT}"><a href="#note${this.COUNT}">${reducedText}</a></div></li>`;
      } else {
        //stringToPlace += `<li><a href="#${this.COUNT}">${reducedText}</a></li>`;
        stringToPlace += `<li><div id="${this.COUNT}"><a href="#note${this.COUNT}">${reducedText}</a></div></li>`;
      }
      this.COUNT++;
    });
    let completeHTML = `<ul>${stringToPlace}</ul>`;
    this.COUNT = 0;
    console.log(completeHTML);
    return completeHTML;
  };

  NoteListView.prototype.reduceText = function(message) {
    if (message.length > 20) {
      return `${message.slice(0, 20)}...`;
    } else {
      return message;
    }
  };
  exports.NoteListView = NoteListView;
})(this);

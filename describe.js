document.write("<h1>Nimzys testing framework! :)</h1> </br></br>");
let describe = (message, callBack) => {
  document.write("----------------------" + "</br>");
  document.write(message + "</br>");
  callBack();
};

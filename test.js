makeTigerLinkClickSayTiger();

function makeTigerLinkClickSayTiger() {
  document
    .getElementById("tiger-link")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      sayTiger();
    });
}

function sayTiger() {
  document.getElementById("animal").innerHTML = "tiger";
}

makeUrlChangeShowAnimalForCurrentPage();

function makeUrlChangeShowAnimalForCurrentPage() {
  window.addEventListener("hashchange", showAnimalForCurrentPage);
}

function showAnimalForCurrentPage() {
  showAnimal(getAnimalFromUrl(window.location));
}

function getAnimalFromUrl(location) {
  console.log(location.hash.split("#")[1]);
  return location.hash.split("#")[1];
}

function showAnimal(animal) {
  document.getElementById("animal").innerHTML = animal;
}

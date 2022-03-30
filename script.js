/* In order to control the photo display in mobile */
const element = document.getElementById("photo1");
const queryViewport = window.matchMedia("(max-width: 768px)");
const screenTest = (evt) => {
  if (evt.matches) {
    element.classList.add("img-fluid");
  } else {
    element.classList.remove("img-fluid");    
  }
}
queryViewport.addEventListener("change", screenTest);

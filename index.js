let li = document.querySelectorAll("#all>li");
li.forEach(function (el) {
  el.addEventListener("click", display);
});
function display() {
  console.log("in");
  let ch = document.querySelector("#check");
  ch.checked = false;
}

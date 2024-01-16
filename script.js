console.log(
  "Add a dialog that triggers when the visitor clicks Contact information"
);

const neededInput = document.querySelector("header p input");
neededInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  const inputVal = neededInput.value;
  if (event.keyCode === 13) {
    document.querySelector("header p").innerHTML = inputVal;
  }
});

const neededDate = document.querySelector("body div section p button");
neededDate.addEventListener("click", function () {
  document.querySelector("body div section p ").innerHTML =
    new Date().toDateString();
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const scrollelement = document.querySelector("body div section");

if (window.innerWidth < 830) {
  scrollelement.addEventListener("scroll", function () {
    if (scrollelement.scrollTop > 0.5 * scrollelement.scrollHeight) {
      document.querySelector("footer").style.setProperty("display", "flex");
    } else {
      document.querySelector("footer").style.setProperty("display", "none");
    }
  });
}

// Get Navbar toggle button

const toggleButton = document.getElementsByClassName("toggle")[0];

// Get Navbar Item

const navbarItems = document.getElementsByClassName("navbar-item");

// event when toggle button is clicked

toggleButton.addEventListener("click", () => {
  //transition navbar items
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.toggle("active");
  }
});

// todo ========================= Bikin Modal Biar Kece ================================== //

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
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

// todo ========================= Bikin Collapse button Biar Kece ================================== //

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

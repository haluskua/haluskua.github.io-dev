//javascript

// alert('hello world!');

// function openMenuFunction() {
//     document.getElementById("menu-button").style.display = "none";
//   }


  // Get the button, and when the user clicks on it, execute myFunction
document.getElementById("menu-button", "sprint1-drop").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown", "myDropdown2").classList.toggle("show");
}  
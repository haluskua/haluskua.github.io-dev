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


// var result = function sum(a, b){
//   var actual = a + b;
// }

function testSum (a, b ) {
  var expected = 7;
  actual = (4 + 3);

  if (actual != expected) {
      console.log("It's broken..")
  } else {
      console.log("It works!")
  }
}
  // could call the funtion 'sum' or the variable 'result'
var result = function sum(){
  return testSum();
};

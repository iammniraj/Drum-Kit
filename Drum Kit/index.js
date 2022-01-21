/*
var noOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function clicked() {
    alert("got clicked");
  });
}
*/

//button press
// var noOfDrum = document.querySelectorAll(".drum").length;
// var i = 0;
// while (i < noOfDrum) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//    //detecting inner html of a button
//     var buttonInerHtml = this.innerHTML;
//
//     switch (buttonInerHtml) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "k":
//         var kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       case "l":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       default:console.log(innerHTML);
//
//     }
//   });
//   i++;
// }
//
//
// //key board press
// var noOfDrum = document.querySelectorAll(".drum").length;
// var i = 0;
// while (i < noOfDrum) {
//   document.addEventListener("keypress",function(event){
//     //console.log(event);
//     var keyInnerHtml=event.key;
//     //console.log(keyInnerHtml);
//
//     switch (keyInnerHtml) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "k":
//         var kick = new Audio("sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       case "l":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       default:console.log(event.key);
//
//     }
//   });
//   i++;
// }
var noOfDrums = document.querySelectorAll(".drum").length;
var i = 0;
while (i < noOfDrums) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerButtonClick = this.innerHTML;
    makeSound(innerButtonClick);
    buttonAnimation(innerButtonClick);

  });
  i++;
}


document.addEventListener("keypress", function(event) {
  var innerButton = event.key;
  makeSound(innerButton);
  buttonAnimation(innerButton);
});




function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(key);
  }
}
function buttonAnimation(CurrentKey){
  var activeButton=document.querySelector("."+ CurrentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

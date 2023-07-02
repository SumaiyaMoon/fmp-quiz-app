
import { database, getDatabase, ref, set, push, onValue, onChildAdded, onChildChanged, onChildRemoved } from "./../firebaseConfig.js"
alert("Kindly Submit the form Carefully after Filling Questions then move towards New Question")

// //Quiz Questions

// var quizQuestions = [
//     {
//       question: "Which HTML tag is used to define an unordered list?",
//       options: ["ul", "li", "ol", "dl"],
//       answer: "ul"
//     },
//     {
//       question: "Which attribute is used to define inline styles in HTML?",
//       options: ["class", "id", "style", "src"],
//       answer: "style"
//     },
//     {
//       question: "What is the correct HTML element for inserting a line break?",
//       options: ["br", "lb", "break", "line"],
//       answer: "br"
//     },
//     {
//       question: "Which HTML tag is used to display an image?",
//       options: ["img", "src", "image", "picture"],
//       answer: "img"
//     },
//     {
//       question: "Which attribute specifies an alternate text for an image?",
//       options: ["alt", "title", "src", "href"],
//       answer: "alt"
//     },
//     {
//         question: "Which property is used to change the text color in CSS?",
//         options: ["color", "text-color", "font-color", "text-style"],
//         answer: "color"
//       },
//       {
//         question: "Which CSS property is used to control the spacing between lines of text?",
//         options: ["line-height", "text-spacing", "line-spacing", "text-line"],
//         answer: "line-height"
//       },
//       {
//         question: "Which property is used to apply rounded corners to an element in CSS?",
//         options: ["border-radius", "corner-radius", "border-style", "border-round"],
//         answer: "border-radius"
//       },
//       {
//         question: "Which CSS property is used to set the background color of an element?",
//         options: ["background-color", "bg-color", "color-background", "element-background"],
//         answer: "background-color"
//       },
//       {
//         question: "Which property is used to control the opacity of an element in CSS?",
//         options: ["opacity", "transparent", "visibility", "alpha"],
//         answer: "opacity"
//       },
//       {
//         question: "Which keyword is used to declare a variable in JavaScript?",
//         options: ["var", "let", "const", "variable"],
//         answer: "var"
//       },
//       {
//         question: "Which JavaScript method is used to remove the last element from an array?",
//         options: ["pop()", "shift()", "slice()", "splice()"],
//         answer: "pop()"
//       },
//       {
//         question: "Which function is used to execute a block of code repeatedly at a set interval?",
//         options: ["setInterval()", "setTimeout()", "forEach()", "while()"],
//         answer: "setInterval()"
//       },
//       {
//         question: "Which operator is used to check if two values are equal in JavaScript?",
//         options: ["==", "===", "=", "!="],
//         answer: "=="
//       },
//       {
//         question: "Which method is used to convert a string to uppercase in JavaScript?",
//         options: ["toUpperCase()", "toLowerCase()", "toUppercase()", "toUpper()"],
//         answer: "toUpperCase()"
//       }
//   ];
var optParent = document.getElementById("optParent");
var questionInput = document.getElementById("questionInput");
var optInput = document.getElementById("optInput");
var answerInput = document.getElementById("answerInput");


var options = [];

window.addOpt = function () {
  var listOpt = `<li class="m-2 p-2"><i class="fa-regular fa-circle-dot p-2 m-2"></i>${optInput.value}</li>`;
  optParent.innerHTML += listOpt;
  options.push(optInput.value);
  optInput.value = ""
  console.log(options);
}
window.addInDB = function () {

  var obj = {
    question: questionInput.value,
    options: options,
    answer: answerInput.value,
  };
  var id = push(ref(database, 'quizQuestions')).key
  var reference = ref(database, `quizQuestionsObj/${id}`);
  set(reference, obj);
  confirm("Question Added"); //same as alert
}
window.addNewQuestion= function() {
  optParent.innerHTML = "";
  questionInput.value = "";
  answerInput.value = "";
}
window.clearChoices = function() {
  optParent.innerHTML = "";
}
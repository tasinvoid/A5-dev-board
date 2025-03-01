let cardsContainer = document.getElementById("cards-container");
let taskNumber = document.getElementById("task-number");
let historiesbox = document.getElementById("histories");
let completedTask = document.getElementById("completed-task");
let currentDate = document.getElementById("currentDate");
let currentWeekday = document.getElementById("currentWeekday");
let clearBtn = document.getElementById("clear-btn");
let themebtn = document.getElementById("theme-btn");
setCurrentDate();
//complete btn
cardsContainer.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    alert("Board Updated Successfully");
    event.target.disabled = true;
    event.target.classList.remove("bg-blue-600");
    event.target.classList.add("bg-gray-400");
    taskRemover();
    taskAdder();
    addToActivity(event);
  }
});
//clear btn
clearBtn.addEventListener("click", () => {
  historiesbox.innerHTML = "";
});
function taskRemover() {
  let currentTaskNumber = parseInt(taskNumber.innerText);
  currentTaskNumber--;
  taskNumber.innerText = "0" + currentTaskNumber;
}
//theme btn
function taskAdder() {
  let currentTaskNumber = parseInt(completedTask.innerText);
  currentTaskNumber++;
  completedTask.innerText = currentTaskNumber;
}
function addToActivity(event) {
  let cardTitle =
    event.target.parentNode.parentNode.querySelector(".card-title").innerText;
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "bg-blue-50 my-5 p-5 rounded-xl");
  let newParapragh = document.createElement("p");
  let timeString = getActivityTime();
  newParapragh.innerText =
    "You have Completed The Task " + cardTitle + " at " + timeString;
  newDiv.appendChild(newParapragh);
  historiesbox.appendChild(newDiv);
}
function getActivityTime() {
  let time = "";
  let now = new Date();
  let hours = formatTime(now.getHours());
  let minutes = formatTime(now.getMinutes());
  let seconds = formatTime(now.getSeconds());
  let AMPM = hours >= 12 ? "PM" : "AM";
  return (time = `${hours}:${minutes}:${seconds} ${AMPM}`);
}
function formatTime(number) {
  return number < 10 ? "0" + number : number;
}
function getCurrentDate() {
  const currentDate = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekday[currentDate.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();
  let date = currentDate.getDate();
  return [day, month, year, date];
}
function setCurrentDate() {
  let times = getCurrentDate();
  currentWeekday.innerText = `${times[0]}`;
  currentDate.innerText = `${times[1]}  ${times[3]},      ${times[2]}`;
}

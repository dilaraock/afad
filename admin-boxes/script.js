let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let redCirleId = document.querySelector("#redcircle");
let yellowCirleId = document.querySelector("#yellowcircle");
let greenCirleId = document.querySelector("#greencircle");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;



// let progress = setInterval(() => {
// progressValue++;
// valueContainer.textContent = `${progressValue}%`;
// progressBar.style.background = `conic-gradient(
// #dc3545 ${progressValue * 3.6}deg,
// #ccd2db ${progressValue * 3.6}deg
// )`;
// if (progressValue == progressEndValue) {
// clearInterval(progress);
// }
// }, speed);




 if (valueContainer.id == "greencircle") {
     let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
         #13a913 ${progressValue * 3.6}deg,
         #ccd2db ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEndValue) {
             clearInterval(progress);
             }
         }, speed); 
 };

// if (valueContainer.id == "redcircle") {
//     let progress = setInterval2(() => {
//         progressValue++;
//         valueContainer.textContent = `${progressValue}%`;
//         progressBar.style.background = `conic-gradient(
//         #dc3545 ${progressValue * 3.6}deg,
//         #ccd2db ${progressValue * 3.6}deg
//         )`;
//         if (progressValue == progressEndValue) {
//         clearInterval(progress);
//         }
//         }, speed);
//     };


  
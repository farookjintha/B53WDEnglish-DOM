// function showDataImmediately() {
//   setImmediate(() => {
//     console.log("Calling setImmediate Function");
//   });
// }

// function showDataAfterDelay() {
//   setTimeout(() => {
//     console.log("Calling setTimeout Function:");
//   }, 5000);
// }

// function showDataAtRegularInterval() {
//   setInterval(() => {
//     console.log("Calling the setInterval Function:");
//   }, 2000);
// }

// showDataImmediately();
// showDataAfterDelay();
// showDataAtRegularInterval();

function showData1() {
  setImmediate(() => {
    console.log("Calling setImmediate Function");
  });
}

function showData2() {
  setTimeout(() => {
    console.log("Calling setTimeout Function:");
  }, 0);
}

function showData3() {
  setInterval(() => {
    console.log("Calling the setInterval Function:");
  }, 0);
}
showData2();
showData3();
showData1();

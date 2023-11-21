function handleCreationOfElement() {
  console.log("Creating a new element");

  const newDivElement = document.createElement("div"); // creating a new div element using createElement()
  //   newDivElement.innerText = "<h1>New DIV Element</h1>"; // adding content to the element
  newDivElement.innerHTML = "<h1>New DIV Element</h1>";
  newDivElement.innerHTML += "<h2>New H2 Element</h2>";
  newDivElement.setAttribute("class", "myDivElement");
  document.body.appendChild(newDivElement); // attaching the element inside the body
  // document.body.append("<h2>Hello World</h2>");
}

function handleCreationOfAnchorElement() {
  const newAnchorElement = document.createElement("a");

  newAnchorElement.innerText = "Facebook";
  newAnchorElement.setAttribute("href", "https://www.facebook.com");
  newAnchorElement.setAttribute("target", "_blank");

  newAnchorElement.setAttribute("class", "myAnchor");

  const anchorContainer = document.getElementById("anchorContainer");
  anchorContainer.appendChild(newAnchorElement);
}

function modifyStyle() {
  const allDivElements = document.getElementsByClassName("myDivElement");

  [...allDivElements].forEach((element, index) => {
    element.setAttribute("style", "color: blue");
  });
}

function accessAllDivAndChangeBorder() {
  const allDivElements = document.getElementsByTagName("div");

  [...allDivElements].forEach((element, index) => {
    element.setAttribute("style", "border: 2px solid orange");
  });
}

function useQuerySelector() {
  const querySelectorUsingId = document.querySelector("#heading2");
  const querySelectorUsingClass = document.querySelector(".heading1");
  const querySelectorUsingTag = document.querySelector("h2");

  querySelectorUsingId.setAttribute("style", "color: purple");
  querySelectorUsingClass.setAttribute("style", "color: purple");
  querySelectorUsingTag.setAttribute("style", "color: purple");
}

function useQuerySelectorAll() {
  const querySelectorAllUsingId = document.querySelectorAll("#heading2");
  const querySelectorAllUsingClass = document.querySelectorAll(".heading1");
  const querySelectorAllUsingTag = document.querySelectorAll("h2");

  [...querySelectorAllUsingId].forEach((element, index) => {
    element.setAttribute("style", "border: 2px solid blue");
  });
  [...querySelectorAllUsingClass].forEach((element, index) => {
    element.setAttribute("style", "border: 2px solid blue");
  });
  [...querySelectorAllUsingTag].forEach((element, index) => {
    element.setAttribute("style", "border: 2px solid blue");
  });
}

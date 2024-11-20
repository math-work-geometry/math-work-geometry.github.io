function getRandomGreeting() {
  var greetings = [
    "Duplicate website made by the Unblocked Games Hub. Original website: lite.3kh0.net",
    "Duplicate website made by the Unblocked Games Hub. Original website: lite.3kh0.net",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();

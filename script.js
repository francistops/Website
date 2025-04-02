// disable for now
function darkMode() {
  const darkModeButton = document.getElementById("dark-mode");
  document.body.classList.toggle("dark-mode");

  if (darkModeButton.innerText === "🌞") {
    darkModeButton.innerText = "🌛";
  } else if (darkModeButton.innerText === "🌛") {
    darkModeButton.innerText = "🌞";
  }
}

window.onload = function () {
  const darkModeButton = document.getElementById("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.innerText = "🌛";
  } else {
    darkModeButton.innerText = "🌞";
  }
};

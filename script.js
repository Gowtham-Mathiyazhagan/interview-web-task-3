// selected input and button
let input = document.getElementsByClassName("input-text")[0];
let button = document.getElementsByClassName("submit-btn")[0];
let indicator = false;

// Event Listner for button
button.addEventListener("click", () => {
  button.style.backgroundColor = "#096DD9";
  
// change the icons
  button.style.backgroundColor = "#40a9ff";
  let iconSearch = document.querySelector(".fa-solid");
  iconSearch.style.display = "none";
  let iconLoader = document.querySelector(".spinner-border");
  iconLoader.style.display = "block";

// Edit the cursors
  input.classList.add("cursor")
  button.classList.add("cursor")
  
// After 2 secods change the styles
  setTimeout(() => {
	button.style.border="1px solid #D9D9D9"
    button.style.backgroundColor = "#F5F5F5";
	button.disabled ="true"
	input.disabled ="true"
	input.style.border="1px solid #D9D9D9"
	input.style.backgroundColor = "#F5F5F5";
	input.classList.add("place")
    let iconSearch = document.querySelector(".fa-solid");
    iconSearch.style.display = "block";
	iconSearch.style.color="#D9D9D9"
    let iconLoader = document.querySelector(".spinner-border");
    iconLoader.style.display = "none";
  }, 2000);
});

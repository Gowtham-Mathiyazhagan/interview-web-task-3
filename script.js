// selected input and button
let input = document.getElementsByClassName("input-text")[0];
let button = document.getElementsByClassName("submit-btn")[0];
let indicator = false;

// Event Listner for button
button.addEventListener("click", () => {
  button.style.backgroundColor = "#096DD9";
  if (indicator) {
    return;
  }
  button.style.backgroundColor = "#40a9ff";
  let iconSearch = document.querySelector(".fa-solid");
  iconSearch.style.display = "none";
  let iconLoader = document.querySelector(".spinner-border");
  iconLoader.style.display = "block";


  setTimeout(() => {
	button.style.border="1px solid #D9D9D9"
    button.style.backgroundColor = "#F5F5F5";
	button.disabled ="true"
	input.disabled ="true"
	input.style.border="1px solid #D9D9D9"
    let iconSearch = document.querySelector(".fa-solid");
    iconSearch.style.display = "block";
	iconSearch.style.color="#D9D9D9"
    let iconLoader = document.querySelector(".spinner-border");
    iconLoader.style.display = "none";
  }, 2000);
});

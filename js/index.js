// Your code goes here

//querySelectors
const logoHeader = document.querySelector(".logo h1");
logoHeader.addEventListener("doubleclick", function (event) {
  logoHeader.style.color = "red";
});

const introHeader = document.querySelector(".intro h2");
introHeader.addEventListener("mouseover", function (event) {
  introHeader.style.color = "red";
});

// - `mouseover`
//   - `keydown`
//   - `wheel`
//   - `load`
//   - `focus`
//   - `resize`
//   - `scroll`
//   - `select`
//   - `dblclick`
//   - `drag / drop`

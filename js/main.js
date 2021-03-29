const btnswitch = document.querySelector("#switch");
const page = document.querySelector("#container-page");

btnswitch.addEventListener("click", () => {
  btnswitch.classList.toggle("active");
  page.classList.toggle("dark");
});

const btnContainer = document.querySelector("aside");
const rateBtn = btnContainer.querySelectorAll("button");
const submitBtn = document.querySelector("input");
const thankYouPage = document.getElementById("thankYouSection");
const ratingPhrase = document.getElementById("ratingPhrase");
const mainPage = document.getElementById("mainSection");

let activeRate = "";
for (let i = 0; i < rateBtn.length; i++) {
  let button = rateBtn[i];
  activeRate = button.classList.contains("active").innerText || "";

  button.addEventListener("click", (e) => {
    for (const b of rateBtn) {
      b.classList.contains("active") ? b.classList.remove("active") : null;
    }
    button.innerText == activeRate ? button.classList.remove("active") : null;
    button.classList.add("active");
    activeRate = e.target.innerText;
  });
}

submitBtn.addEventListener("click", (e) => {
  if (activeRate) {
    thankYouPage.dataset.visible = "true";
    mainPage.dataset.visible = "false";
    ratingPhrase.innerText = `You selected ${activeRate} out of 5`;
  }
});

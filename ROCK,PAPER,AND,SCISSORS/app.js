let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
choices.forEach((ch) => {
  //   console.log(ch);
  ch.addEventListener("click", () => {
    const choiceId = ch.getAttribute("id");
    console.log(`${choiceId} was clicked`);
  });
});

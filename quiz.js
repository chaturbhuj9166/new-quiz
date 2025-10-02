const data = [
  {
    q: "What is the capital of India?",
    a: "New Delhi",
    opt: ["Jaipur", "New Delhi", "Ajmer", "Mumbai"],
  },
  {
    q: "What is the capital of Pakistan?",
    a: "Islamabad",
    opt: ["Multan", "Karachi", "Rawalpindi", "Islamabad"],
  },
  {
    q: "What is the capital of Afghanistan?",
    a: "Kabul",
    opt: ["Kabul", "Kandhar", "Zaranj", "Sangin"],
  },
  {
    q: "What is the capital of Japan?",
    a: "Tokyo",
    opt: ["Kyoto", "Nagasaki", "Tokyo", "Hiroshima"],
  },
  {
    q: "What is the capital of China?",
    a: "Beijing",
    opt: ["Beijing", "Chengdu", "Shanghai", "Chonginq"],
  },
];
const timerDiv = document.querySelector(".timer");
const questionDiv = document.querySelector(".question");
const optionsDiv = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const scoreSpan = document.querySelector("#score span");
const button = document.querySelector(".button");

let count = 5;
let questionNumber = 0;

printQuestionAndOptions(); //PRINTS FIRST QUESTION & OPTIONS

let time = setInterval(() => {
  if (count === 1) {
    if (questionNumber === data.length) {
      //question will empty
      clearInterval(time);
      timerDiv.style.display = "none";
      questionDiv.style.display = "none";
      optionsDiv.style.display = "none";
    }
    count = 5;
    timerDiv.textContent = 5;
    // NEXT QUESTION
    questionNumber++;
    printQuestionAndOptions();
  } else {
    count--;
    timerDiv.textContent = count;
  }
}, 1000);
// clearInterval(time)

function printQuestionAndOptions() {
  questionDiv.innerText = data[questionNumber].q;
  options.forEach(
    (option, index) => (option.innerText = data[questionNumber].opt[index])
  );

  //   for (let i = 0; i < options.length; i++) {
  //     options[i].innerText = data[questionNumber].opt[i];
  //   }

  options.forEach((e) => {
    e.style.backgroundColor = "";
    e.style.pointerEvents = "auto";

    e.addEventListener("click", () => {
      options.forEach((e) => {
        e.style.pointerEvents = "none";
      });

      if (e.innerText === data[questionNumber].a) {
        e.style.backgroundColor = "green";
      } else {
        e.style.backgroundColor = "red";

        options.forEach((o) => {
          if (o.innerText === data[questionNumber].a) {
            o.style.backgroundColor = "green";
          }
        });
      }
    });
  });
}

button.addEventListener("click", () => {
  timerDiv.textContent = 5;
  count = 5;
  questionNumber++;
  printQuestionAndOptions(); //PRINTS FIRST QUESTION & OPTIONS
});
// function resercounter() {

// }

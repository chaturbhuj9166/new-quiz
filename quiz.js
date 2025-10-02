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
const scoreSpan = document.querySelector(".score");
const button = document.querySelector(".button");

let count = 5;
let questionNumber = 0;
let score = 0;

printQuestionAndOptions();

let time = setInterval(() => {
  if (count === 1) {
    if (questionNumber == data.length - 1) {
      clearInterval(time);
      timerDiv.style.display = "none";
      questionDiv.style.display = "none";
      optionsDiv.style.display = "none";
      button.style.display = "none";
      alert("Quiz finished! Your Score: " + score);
    } else {
      count = 5;
      timerDiv.textContent = 5;
      questionNumber++;
      printQuestionAndOptions();
    }
  } else {
    count--;
    timerDiv.textContent = count;
  }
}, 1000);

function printQuestionAndOptions() {
  questionDiv.innerText = data[questionNumber].q;
  options.forEach(
    (option, index) => (option.innerText = data[questionNumber].opt[index])
  );

  options.forEach((e) => {
    e.style.backgroundColor = "";
    e.style.pointerEvents = "auto";

    e.onclick = () => {
      options.forEach((o) => {
        o.style.pointerEvents = "none";
      });

      if (e.innerText === data[questionNumber].a) {
        e.style.backgroundColor = "green";
        score++;
        console.log(score);
        scoreSpan.innerText = score;
      } else {
        e.style.backgroundColor = "red";
        options.forEach((o) => {
          if (o.innerText === data[questionNumber].a) {
            o.style.backgroundColor = "green";
          }
        });
      }
    };
  });
}

button.addEventListener("click", () => {
  if (questionNumber == data.length - 1) {
    clearInterval(time);
    timerDiv.style.display = "none";
    questionDiv.style.display = "none";
    optionsDiv.style.display = "none";
    button.style.display = "none";
    alert("Quiz finished! Your Score: " + score);
  } else {
    timerDiv.textContent = 5;
    count = 5;
    questionNumber++;
    printQuestionAndOptions();
  }
});

const question = document.getElementById("question");
const choices = Array.from( document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

//creating my arrays
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

  {
        question: "What kind of flightless bird is a penguin?",
        choice1: "A walking bird.",
        choice2: "A bird that flies duh.",
        choice3: "They can't fly.",
        choice4: "I don't feel this should be a question.",
        answer: 3
    },
    {
        question: "Where can you find a penguin?",
        choice1: "Shopping for a phone plan.",
        choice2: "New Zealand.",
        choice3: "With a bottle of Jack.",
        choice4: "Neptune.",
        answer: 2
    },
    {
        question: "What does a penguin eat?", 
        choice1: "TACOS!",
        choice2:  "Fish.",
        choice3: "Other penguins?",
        choice4: "Bacon.",
        answer: 2
    },
    {
        question: "What color is a penguin?",
        choice1: "Orange with black stripes.",
        choice2: "Rainbow.",
        choice3: "They're invisible.",
        choice4: "Black and white.",
        answer: 4
    },
    {
        question: "Which penguin species is the tallest?", 
        choice1: "Emperor.",
        choice2: "Fridge.",
        choice3: "Hippo.",
        choice4: "F-150 Ford",
        answer: 1
    },
    {
        question: "How many species of penguins are there?",
        choice1: "163.",
        choice2: "18.",
        choice3: "There are more than 1 type of penguin?!",
        choice4: "3,200!",
        answer: 2
    },
    {
        question: "How many penguin films are there currently",
        choice1: "Heck I don't know.",
        choice2:  "Who makes films about penguin?",
        choice3:  "36.",
        choice4: "Way too many to count.",
        answer: 4
    },
    {
        question: "Do you think baby penguins are cute?",
        choice1: "FUCK YES! I want to steal one!",
        choice2: "I love kittens.",
        choice3: "What is a penguin.",
        choice4: "Kill it with FIRE!",
        answer:  1
    },
    {
        question: "Do you want bacon?",
        choice1: "I love bacon.",
        choice2: "What kind of bacon.",
        choice3: "I am hungry.",
        choice4: "Is it penguin bacon.",
        answer: 1
    },
    {
        question: "Do penguins wear shoes?",
        choice1: "Yea of course.",
        choice2: "Why would they?!",
        choice3: "They have flippers.",
        choice4: "*busy eating bacon*",
        answer: 3
    },
    {
        question: "Why can't penguins fly?",  
        choice1: "I don't freaking know.",
        choice2: "God hates penguins.",
        choice3: "They're too cute to fly.",
        choice4: "Physics.",
        answer:  4
    }
];

    //CONSTANTS
    // each correct answer give you 2 points out of 11 questions for a max of 22 points
    const CORRECT_GUESS = 2;
    const MAX_QUESTIONS = 11; 

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
      };
      
      getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS)         
        //let player know how many questions to answer and how many left
        questionCounter++;
        questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
      
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
      
        choices.forEach(choice => {
          const number = choice.dataset["number"];
          choice.innerText = currentQuestion["choice" + number];
        });
      
        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
      };
      
      choices.forEach(choice => {
        choice.addEventListener("click", e => {
          if (!acceptingAnswers) return;
      
          acceptingAnswers = false;
          const selectedChoice = e.target;
          const selectedAnswer = selectedChoice.dataset["number"];

          const classToApply =
          selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

          if (classToApply === "correct") {
              incrementScore (CORRECT_GUESS);
          }
          
          selectedChoice.parentElement.classList.add(classToApply);
          
          setTimeout (() => {
              selectedChoice.parentElement.classList.remove(classToApply);
              getNewQuestion();
        }, 1000);
    });
});
      incrementScore = num => {
          score += num;
          scoreText.innerText = score;
      };

      startGame();
const data = [
    {
        question: "Who is making the Web standards?",
        options: {
            a: "Google",
            b: "Microsoft",
            c: "Mozilla",
            d: "The World Wide Web Consortium"
        },
        correct: "d",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: {
            a: "<head>",
            b: "<heading>",
            c: "<h1>",
            d: "<h6>"
        },
        correct: "c",
    },
    {
        question: "What does CSS stands for?",
        options: {
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats"
        },
        correct: "b",
    },
    {
        question: "What does HTML stands for?",
        options: {
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminal Motorboats Lamborginis"
        },
        correct: "a",
    },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

function loadQuiz() {
    const currentQuizData = data[currentQuiz]
    questionEl.textContent = currentQuizData.question
    Object.keys(currentQuizData.options).forEach((optionKey, index) => {
        const label = document.getElementById(`label${optionKey.toUpperCase()}`)
        label.textContent = currentQuizData.options[optionKey]
        answerEls[index].checked = false
    })
}

function getSelected() {
    let answer = null
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if (answer !== null) {
        if (answer === `option${data[currentQuiz].correct.toUpperCase()}`) {
            score++
        }
        currentQuiz++
        if (currentQuiz < data.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${data.length} Questions Correctly!!</h2>
                <button onclick="location.reload()">Do it again</button>
            `
        }
    } else {
        alert("Please select an answer.")
    }
})

loadQuiz()

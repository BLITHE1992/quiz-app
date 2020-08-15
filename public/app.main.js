// questions Array
let questions = [
    {
        question: "Convert 6,480 square degrees to steradians",
        answer: "Divide y by 4 then subtract it from 3 and then multiply by 9",
        option: [
            "Subtract y from 3 then divide by 4 and then multiply by 9",
            "Divide y by 4 then subtract 3 and then multiply by 9",
            "Divide y by 4 then multiply by 9 and then subtract it from 3",
            "Divide y by 4 then subtract it from 3 and then multiply by 9",
        ]
    },
    {
        question: "If t represents a variable, write ¼(t + 5) as a verbal expression",
        answer: "Add 5 to t, and then multiply by ¼",
        option: [
            "Multiply t by ¼, and then add 5",
            "Add 5 to t and then divide by ¼",
            "Subtract 5 from t, and then multiply by ¼",
            "Add 5 to t, and then multiply by ¼",
        ]
    },
    {
        question: "This special die is in the shape of an octahedron marked with the numbers 1 to 8.",
        answer: "21.875",
        option: [
            "4.677",
            "21.875",
            "14",
            "24.490"
        ]
    },
    {
        question: "If 90° < x < 180°, what is the value of sin-1(0.928)?",
        answer:"111.9°",
        option: [
            "100.9°",
            "148.1",
            "68.1°",
            "111.9°",
        ]
    },
    {
        question: "2004 is divisible by 12 and the sum of its digits is equal to 6 Altogether, how many four-digit numbers have these two properties?",
        answer: "18",
        option: [
            "10",
            "16",
            "18",
            "19"
        ]
    }
]

sessionStorage.setItem("NumOfQuestion",questions.length)


var arr = []

// declaring variable for question count and points 
let quesNum = 0;
let points = 0
sessionStorage.setItem("points", points)
attempt = 0 ;
sessionStorage.setItem("attempt", attempt)


// // timeOut check 
// let sec = 10;
// let min = 0;

// counter time set
let sec = 60;
let min = 4;
var p = document.querySelector(".counter p");
if (min != 0) {
    p.textContent = `${min + 1} : 00`
} else {
    p.textContent = `0${min} : ${sec}`
}

function timer() {
    var interval = setInterval(() => {

        if (min == 0 && sec == 0) {
            clearInterval(interval)
            sessionStorage.setItem("timeOut", true)
            sessionStorage.setItem("timeS", sec)
            sessionStorage.setItem("timeM", min)
            location.href = "last.html"
            return;
        }
        sec--;
        if (sec == 0) {
            sec = 00;
        } else if (sec < 0) {
            sec = 59;
            min--
        }

        if (min < 2) {
            var counterDiv = document.querySelector(".counter");
            counterDiv.style.backgroundColor = "#bf0000"
        }

        var secs = (sec < 10) ? `0${sec}` : sec
        var mins = (min < 10) ? `0${min}` : min
        p.textContent = `${mins} : ${secs}`

    }, 1000)

}

// calling funtion onload
var load = document.querySelector("body");
load.onload = function () {
    quiz(quesNum)
    timer()
}

// creating quiz HTML 
function quiz(quesNum) {
    var quesCont = document.querySelector(".question-cont");

    var qn = document.createElement("div")
    var p = document.createElement("p")
    p.innerHTML = `Question ${quesNum + 1} of ${questions.length}`
    qn.classList.add("qn");
    qn.appendChild(p);
    quesCont.appendChild(qn)


    var h1 = document.createElement("h1");
    var qu = questions[quesNum].question
    h1.innerHTML = qu
    quesCont.appendChild(h1)

    var divOp = document.createElement("div");
    divOp.classList.add("options");

    for (var i = 0; i < (questions[quesNum].option).length; i++) {
        let div = document.createElement("div");
        div.classList.add("op");

        let inp = document.createElement("input");
        inp.setAttribute('type', 'radio');
        inp.setAttribute('name', 'option');
        inp.setAttribute('id', ('op' + i));
        var ansOption = questions[quesNum].option[i]
        inp.setAttribute('value', ansOption);

        let label = document.createElement("label")
        label.textContent = ansOption
        label.setAttribute('for', ('op' + i));

        div.appendChild(inp)
        div.appendChild(label)
        divOp.appendChild(div)
    }
    quesCont.append(divOp)

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-s");

    let button = document.createElement("button");
    button.classList.add("btnS");
    button.textContent = 'Submit'
    btnDiv.append(button)
    quesCont.appendChild(btnDiv)

}

// sessionStorage.setItem("a",JSON.stringify(questions))

var arr = []


// Submit button funtion
var subBtn = document.querySelector(".question-cont");
subBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnS")) {
        // attempt++
        // sessionStorage.setItem("attempt", attempt)

        if (quesNum === (questions.length - 1)) {

            let inpCheck = document.querySelectorAll("input");
            Array.from(inpCheck).forEach((inp) => {
                if (inp.checked) {
                    var qu = { q: questions[quesNum].question, corAns: questions[quesNum].answer, userAns: inp.value }
                    arr.push(qu)
                    attempt++
                    sessionStorage.setItem("attempt", attempt)
                    if (inp.value === questions[quesNum].answer) {
                        points += 10
                        sessionStorage.setItem("points", points);
                    }
                }
            })
            
            sessionStorage.setItem("quizObj", JSON.stringify(arr))
            sessionStorage.setItem("timeOut", false)
            sessionStorage.setItem("timeS", sec)
            sessionStorage.setItem("timeM", min)
            
            location.href = "last.html"
            return;
        }
        
        
        
        let inpCheck = document.querySelectorAll("input");
        Array.from(inpCheck).forEach((inp) => {
            if (inp.checked) {
                var qu = { q: questions[quesNum].question, corAns: questions[quesNum].answer, userAns: inp.value }
                arr.push(qu)
                attempt++
                sessionStorage.setItem("attempt", attempt)
                if (inp.value === questions[quesNum].answer) {
                    points += 10
                    sessionStorage.setItem("points", points);
                }
                quesNum++;
            }
        })

        sessionStorage.setItem("quizObj", JSON.stringify(arr))

        if (quesNum < questions.length) {
            var quesCont = document.querySelector(".question-cont");
            quesCont.innerHTML = ""
            quiz(quesNum)
        }


    }
})







// var subBtn = document.querySelector(".question-cont");
// subBtn.addEventListener("click", (e) => {
//     if (e.target.classList.contains("btnS")) {

//         if (quesNum === (questions.length - 1)) {
//             location.href = "index.html"
//         }


//         let inpCheck = document.querySelectorAll("input");
//         Array.from(inpCheck).forEach((inp) => {
//             if (inp.checked) {
//                 if (inp.value === questions[quesNum].answer) {
//                     points += 10
//                     sessionStorage.setItem("points", points);
//                 }
//                 quesNum++;
//             }
//         })

//         var quesCont = document.querySelector(".question-cont");
//         quesCont.innerHTML = ""
//         quiz(quesNum)


//     }
// })

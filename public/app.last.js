window.onload = function () {
    result()
}


function result() {

    // checking for time or not for timeOut Div
    let parent = document.querySelector(".mainCont");
    if (sessionStorage.getItem("timeOut") === "true") {
        divTimeout = document.createElement("div");
        divTimeout.classList.add("timeout")
        let h1 = document.createElement("h1");
        h1.textContent = `Time out`
        divTimeout.appendChild(h1)
        parent.appendChild(divTimeout)
    }

    // checking for score for which icon to show
    let points = sessionStorage.getItem("points")
    if (points > 20) {
        let divAward = document.createElement("div");
        divAward.classList.add("awardDiv");
        let award = document.createElement("i")
        award.classList.add("fa", "fa-trophy")
        award.setAttribute("aria-hidden", "true")
        divAward.appendChild(award)
        parent.appendChild(divAward)
    } else if (points <= 20) {
        let divAward = document.createElement("div");
        divAward.classList.add("awardDiv");
        let award = document.createElement("i")
        award.classList.add("fa", "fa-thumbs-down")
        award.setAttribute("aria-hidden", "true")
        divAward.appendChild(award)
        parent.appendChild(divAward)
    }

    // creating HTML for Name and Score
    let h3 = document.createElement("h3");
    let name = sessionStorage.getItem("name")
    if (points > 10) {
        h3.textContent = `Congratulations: ${name}`
    } else {
        h3.textContent = `Hard Luck: ${name}`
    }
    parent.appendChild(h3)

    var quesLen = sessionStorage.getItem("NumOfQuestion")

    let sec_h3 = document.createElement("h3");
    sec_h3.textContent = `points: ${points} / ${quesLen*10}`
    parent.appendChild(sec_h3)

    let th_h3 = document.createElement("h3");
    var attempt = sessionStorage.getItem("attempt")
    th_h3.textContent = `Attempt question: ${attempt} / ${quesLen}`
    parent.appendChild(th_h3)

    let fr_h3 = document.createElement("h3");
    fr_h3.textContent = `percentage: ${(points*100)/(quesLen*10)}%`
    parent.appendChild(fr_h3)

}

//  Back to Home Button
var home = document.querySelector(".home");
home.addEventListener("click", (e) => {
    sessionStorage.clear()
    location.href = "index.html"
})


// check result page
var ckAns = document.querySelector(".ckAns");
ckAns.addEventListener("click", (e) => {
    location.href = "answer.html"
})




var quizRes = JSON.parse(sessionStorage.getItem("quizObj"));

// for(var i=0; i<quizRes.length;i++){
//     console.log(quizRes[i]);
// }

// function abc() {

//     if (quizRes != null){
        
//         var wrap = document.querySelector(".wrappera");
//         for (var i = 0; i < quizRes.length; i++) {
    
//             var div = document.createElement("div");
//             div.classList.add("qum");
    
//             var h1 = document.createElement("h1")
//             h1.textContent = quizRes[i].q
//             h1.classList.add("hhh")
//             div.appendChild(h1)
    
//             var divop1 = document.createElement("div")
//             divop1.classList.add("op", "ops")
//             divop1.textContent = `your answer : ${quizRes[i].userAns}`;
//             if (quizRes[i].userAns == quizRes[i].corAns) {
//                 divop1.classList.add("gn")
//             }else{
//                 divop1.classList.add("re")
//             }
//             div.appendChild(divop1)
    
    
//             var divop2 = document.createElement("div")
//             divop2.classList.add("op", "ops","gn")
//             divop2.textContent =  `correct answer :${quizRes[i].corAns}`;
//             div.appendChild(divop2)
    
    
    
    
    
//             wrap.appendChild(div)
    
    
//             // var divop2 = document.createElement("div")
//             // divop2.classList.add("op")
//     }
//     }

// }

// abc()
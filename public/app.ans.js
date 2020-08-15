var home = document.querySelector(".home");
home.addEventListener("click", (e) => {
    sessionStorage.clear()
    location.href = "index.html"
})

var bckResult = document.querySelector(".bckResult");
bckResult.addEventListener("click", (e) => {
    location.href = "last.html"
})




var quizRes = JSON.parse(sessionStorage.getItem("quizObj"));

function abc() {

    if (quizRes != null){
        
        var wrap = document.querySelector(".wrappera");
        for (var i = 0; i < quizRes.length; i++) {
    
            var div = document.createElement("div");
            div.classList.add("qum");
    
            var h1 = document.createElement("h1")
            h1.textContent = quizRes[i].q
            h1.classList.add("hhh")
            div.appendChild(h1)
    
            var divop1 = document.createElement("div")
            divop1.classList.add("op", "ops")
            divop1.textContent = `your answer : ${quizRes[i].userAns}`;
            if (quizRes[i].userAns == quizRes[i].corAns) {
                divop1.classList.add("gn")
            }else{
                divop1.classList.add("re")
            }
            div.appendChild(divop1)
    
    
            var divop2 = document.createElement("div")
            divop2.classList.add("op", "ops","gn")
            divop2.textContent =  `correct answer :${quizRes[i].corAns}`;
            div.appendChild(divop2)
    
    
    
    
    
            wrap.appendChild(div)
    
    
            // var divop2 = document.createElement("div")
            // divop2.classList.add("op")
    }
    }

}

abc()
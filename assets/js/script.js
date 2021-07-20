console.log("loaded");

// getting elements
const start_btn = document.querySelector(".start_btn button");
const rules_box = document.querySelector(".rules_box");
const quit_btn = rules_box.querySelector(".buttons .quit_btn");
const continue_btn = rules_box.querySelector(".buttons .continue_btn");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const answer_list = document.querySelector(".answer_list");
const time_visual = document.querySelector(".header .time_visual");
const timerLabel = document.querySelector(".timer .timer_label");
const timerClock = document.querySelector(".timer .timer_clock");
const answer = document.getElementsByClassName("answer");

start_btn.onclick = ()=>{
    console.log("start btn clicked");
    rules_box.classList.add("activeRules");
}

quit_btn.onclick = ()=>{
    console.log("quit btn clicked...loser");
    rules_box.classList.remove("activeRules");
}

continue_btn.onclick = ()=>{
    console.log("continue?");
    rules_box.classList.remove("activeRules");
    quiz_box.classList.add("activeQuiz");
    showQuestion(0); //prints Q-1 an answers from questions.js to quiz box
    startTimer(30);
}

// topScore_btn.onclick = ()=>{
//     viewHigh();
// }

// function viewHigh(){
//     rules_box.classList.remove("active");
//     quiz_box.classList.remove("active");
//     result_box.classList.add("active")
// }

var question_count = 0;

function nextQuestion(answer){
    // var correct = questions[question_count].answer;
    var x = answer.value;
    var numRight = 0;

    if (x !== questions[question_count].answer){
        console.log(x +" is wrong");
    }else{
        console.log(x +" is right");
        numRight++;
    }
    console.log("answer: " +questions[question_count].answer);
    if(question_count < questions.length - 1){
        question_count++;
        showQuestion(question_count);
    }else{
        console.log("Quiz Finished!!!");
        gameOver(numRight);  
        question_count = 0; 
    }

}


function showQuestion(index){
    const question_text = document.querySelector(".question_text");


    // todo: look up object set attribute addition
    // Prints Question an Answer to DOM
    let que_tag = '<span>'+ questions[index].number + questions[index].question + '</span>';
    let answer_tag = '<input class="answer" onclick="nextQuestion(this)" value="'+questions[index].choices[0]+'"></input>'
                    + '<input class="answer" onclick="nextQuestion(this)" value="'+questions[index].choices[1]+'"></input>'
                    + '<input class="answer" onclick="nextQuestion(this)" value="'+questions[index].choices[2]+'"></input>'
                    + '<input class="answer" onclick="nextQuestion(this)" value="'+questions[index].choices[3]+'"></input>'

    question_text.innerHTML = que_tag;
    answer_list.innerHTML = answer_tag;

    
    // if (answer.length>=1){
    //     let ansOne = answer.value;
    //     console.log(ansOne);

    //     let ansTwo = answer.item(1).textContent;
    //     console.log(answer.item(1).textContent);

    //     let ansThree = answer.item(2).textContent;
    //     console.log(answer.item(2).textContent);

    //     let ansFour = answer.item(3).textContent;
    //     console.log(answer.item(3).textContent);
    // }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timerClock.textContent = time;
        time--;
        //Add zero when counter is in single digits
        if(time < 9){
            let addZero = timerClock.textContent;
            timerClock.textContent = "0" + addZero;
        }
        if(time<0){
            time = "0";
            counter = "";
        }
    }gameOver(0)
    
}

function gameOver(userScore){
    var scoreFinal = document.getElementById("endScore");
    scoreFinal.innerHTML = userScore;
    alert("You got "+userScore+" Right");
    result_box.classList.add("activeResults");
    quiz_box.classList.remove("activeQuiz");

    

}



console.log("loaded");

// getting elements
const start_btn = document.querySelector(".start_btn button");
const rules_box = document.querySelector(".rules_box");
const exit_btn = rules_box.querySelector(".buttons .quit");
const exit_btn = rules_box.querySelector(".buttons .quit");
const continue_btn = rules_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const answer_list = document.querySelector(".answer_list");
const time_visual = document.querySelector(".header .time_visual");
const timeLabel = document.querySelector(".timer .timer_label");
const timeCounter = document.querySelector(".timer .timer_counter");


start_btn.onclick = ()=>{
    console.log("start btn clicked");
    rules_box.classList.add("activeRules");
}

// restart_btn.onclick = ()=>{
//     playGame();
// }

// continue_btn.onclick = ()=>{
//     console.log("continue?");
//     playGame();
// }

// answer_el.onclick = ()=>{
//     console.log("whoop whoop whoop");
//     console.log (answer);
// }

// topScore_btn.onclick = ()=>{
//     viewHigh();
// }

// function viewHigh(){
//     rules_box.classList.remove("active");
//     quiz_box.classList.remove("active");
//     result_box.classList.add("active")
// }

// function playGame(){
//     console.log("and another one");
//     quiz_box.classList.add("active");
//     rules_box.classList.remove("active");
//     result_box.classList.remove("active");
//     showQuestion();
// }

// let question_count = 0;

// answer_el.onclick = ()=>{
//     if(question_count < questions.length - 1){
//         question_count++;
//         showQuestion(question_count);
//     }else{
//         console.log("Quiz Finished!!!");
//         viewHigh();  
//         question_count = 0; 
//     }

// }


// function showQuestion(index){
//     const question_text = document.querySelector(".question_text");
//     const answer_list = document.querySelector(".answer_list");

//     // todo: look up object set attribute addition
//     let que_tag = '<span>'+ questions[index].number + questions[index].question + '</span>';
//     let answer_tag = '<button class="answer button_def" id="one" ><span>'+questions[index].choices[0]+'</span></button>'
//                     + '<button class="answer button_def" id="one" ><span>'+questions[index].choices[1]+'</span></button>'
//                     + '<button class="answer button_def" id="one" ><span>'+questions[index].choices[2]+'</span></button>'
//                     + '<button class="answer button_def" id="one" ><span>'+questions[index].choices[3]+'</span></button>';

//     question_text.innerHTML = que_tag;
//     answer_list.innerHTML = answer_tag;
// }
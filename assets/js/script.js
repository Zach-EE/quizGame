console.log("loaded");

// getting elements
const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const rules_box = document.querySelector(".rules_box");
const answer_el = quiz_box.querySelector(".answer_list");
const restart_btn = document.querySelector(".restart_btn");
const result_box = document.querySelector(".result_box");
const topScore_btn = document.querySelector(".topScore_btn");


start_btn.onclick = ()=>{
    console.log(rules_box.classList);
    rules_box.classList.add("active");
    console.log(rules_box.classList);
}

restart_btn.onclick = ()=>{
    play_game();
}

answer_el.onclick = ()=>{
    console.log("whoop whoop whoop");
    console.log (answer);
}

topScore_btn.onclick = ()=>{
    view_high();
}

function view_high(){
    rules_box.classList.remove("active");
    quiz_box.classList.remove("active");
    result_box.classList.add("active")
}

function play_game(){
    console.log("and another one");
    rules_box.classList.remove("active");
    results_box.classList.remove("active");
    quiz_box.classList.add("active");
}
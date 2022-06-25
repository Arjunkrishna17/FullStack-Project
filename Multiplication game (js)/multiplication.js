const n1 = Math.ceil(Math.random()*10);
const n2 = Math.ceil(Math.random()*10);

const question_ele = document.getElementById("qn");

const form_ele = document.getElementById("form");

const input_ele = document.getElementById("answer");

question_ele.innerText = `What is ${n1} multiply by ${n2}?`;

const correct_ans = n1*n2;

let score = JSON.parse(localStorage.getItem("score"));

if(!score)
{
    score = 0;
};

form_ele.addEventListener("submit", ()=> {
    const ans = +input_ele.value;
    if(ans === correct_ans){
        score++;
        local_storage()
    }
    else{
        score--;
        local_storage()
    }
});

function local_storage(){
    localStorage.setItem("score", JSON.stringify(score));
}


/* Two Random Number */

const n1 = Math.ceil(Math.random()*10);
const n2 = Math.ceil(Math.random()*10);

/* End of Random number method*/

/* import data from html */

const question_ele = document.getElementById("qn");

const form_ele = document.getElementById("form");

const input_ele = document.getElementById("answer");

const score_ele = document.getElementById("score");

question_ele.innerText = `What is ${n1} multiply by ${n2}?`;

const correct_ans = n1*n2; //correct ans

/* end of import*/

/* score is updated by taking data from local storage, parse 
is used to convert string to number */

let score = JSON.parse(localStorage.getItem("score"));

/* Situation in which no score in local storage set score = 0*/

if(!score)
{
    score = 0;
}

// update score
score_ele.innerText = `Score : ${score}`;

/* Function to addEventListener() 
method allows you to set up functions to be called
when a specified event happens, such as when a user clicks a button. */

form_ele.addEventListener("submit", ()=> {
    const ans = +input_ele.value; /* value gives string data type
     + sign is used to convert string in input to number data type*/

    if(ans === correct_ans){
        score++; // score is incremented 
        local_storage()
    }
    else{
        score--; // score is decremented for wrong answer
        local_storage()
    }
});
 /* store score value in local storage otherwise it became preset value everytime*/

function local_storage(){
    localStorage.setItem("score", JSON.stringify(score))/* jason.stringify is used to conver number value to string becoz 
    all browser downot allow to store number value in local storage*/
}


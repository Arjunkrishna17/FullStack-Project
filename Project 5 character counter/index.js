const textareaE1 = document.getElementById("textarea");
const totalcounterE1 = document.getElementById("total_counter");
const remainingE1 = document.getElementById("remaining_char");
textareaE1.addEventListener("keyup", () => {
   update_counter()
})
update_counter()
function update_counter(){
    totalcounterE1.innerText = textareaE1.value.length;
    remainingE1.innerText = textareaE1.getAttribute("maxlength") -  textareaE1.value.length;
}

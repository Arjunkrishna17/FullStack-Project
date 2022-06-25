const hour_element = document.getElementById("hours"); // get value from id
const min_element = document.getElementById("minutes");
const sec_element = document.getElementById("seconds");
const ampm_element = document.getElementById("ampm");

function clock(){
    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();

/*To update am and pm*/

    if(h > 12){
        h -=12;
      let ampm = "PM";
    }
    else
    {
        ampm = "AM"

    }

    /*Now time is in single digit, so below code is to make it as two digit */

    h = h<10 ? "0" + h :h;
    m = m<10 ? "0" + m :m;
    s = s<10 ? "0" + s :s;

    hour_element.innerText = h;
    min_element.innerText = m;
    sec_element.innerText = s;
    ampm_element.innerText = ampm;
    setTimeout( () => {
        clock();

    },1000) //setTimeout(function,milliseconds)
}
clock();
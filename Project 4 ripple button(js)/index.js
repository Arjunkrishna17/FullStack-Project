const btn_el = document.querySelector(".btn")
btn_el = addEventListener("mouseover", (event)=> {
const x = (event.pageX -btn_el.offsetLeft/*means distance of btn
box from lef,always constant.pagex gives X coordinate, so subtracting from 
offsetleft gives coordinate of clickig place in btn*/);
const y = (event.pageY - btn_el.offsetTop);
btn_el.style.setProperty("--x",x + "px");/*setProperty(var name,value)*/
btn_el.style.setProperty("--y",y + "px");
});

 
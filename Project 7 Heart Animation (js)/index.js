const body_ele = document.querySelector("body");

body_ele.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;/*gives x axis from box edge (offsetX)
    and PageX will give x cordinate from page edge.*/
    const yPos = event.offsetY;

    const span_ele = document.createElement("span"); /*create a span 
    element */
    span_ele.style.left = xPos + "px";//edit css
    span_ele.style.top =  yPos + "px";
    const size = Math.random()*100;//random number b/w 0-100
    span_ele.style.width = size + "px";// change the value of css
    span_ele.style.height = size + "px";
    body_ele.appendChild(span_ele);// added span as child of body.
    setTimeout( () => {
        span_ele.remove();
    },3000);
});

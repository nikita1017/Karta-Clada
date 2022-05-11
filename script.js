let karta=document.getElementById("karta");
// karta = переменная
let pirat=document.getElementById("pirat");
// pirat = переменная
karta.onclick=function(event){
  console.log("Я карта");
  console.log(event.offsetX, event.offsetY)
  pirat.style.left=event.offsetX-30 + "px"
  pirat.style.top=event.offsetY-30 + "px"
}
















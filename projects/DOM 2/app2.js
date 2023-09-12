
// DOM manipulation 
// event probagation
window.addEventListener("click",function(){
    console.log('window');
},true);

document.querySelector(".div2").addEventListener("click",function(){
    e.stopPropagation()
    console.log('DIV 2');
    

},true);
document.querySelector('.div1').addEventListener('click',function(){
    console.log('DIV 1');
},true);
document.querySelector('button').addEventListener('click',function(e){
    console.log(e.target.innerText='clicked');

},true);
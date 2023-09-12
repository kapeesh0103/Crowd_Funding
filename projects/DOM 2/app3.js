// event delagation
// it allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector
document.querySelector('#football').addEventListener('click',function(e){
    console.log('football is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey'
    }
})
let p = document.getElementById("anchor");
p.addEventListener('click',prevent);
function prevent(e){
    e.preventDefault();
    console.log("Link Clicked");
}
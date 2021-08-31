(function(){
    alert("Oi")
    let menu = document.getElementById("menu");
    let list = document.getElementById("list");
   
    menu.addEventListener("click", function(){
        if(list.classList.contains("list-open")){
            list.classList.remove("list-open")
        }else{
            list.classList.add("list-open");
            document.querySelectorAll(".nav-list li").forEach((li)=>{
                li.style.opacity = "0.9"
            })
        }
    })
   
})();






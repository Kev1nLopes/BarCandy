(function(){
    let menu = document.getElementById("menu");
    let list = document.getElementById("list");
    console.log(list)
   
    menu.addEventListener("click", function(){
        let h = false
        if(list.classList.contains("list-open")){
            list.classList.remove("list-open");
          
        }else{
            list.classList.add("list-open");
           
        }
    });
   
})();






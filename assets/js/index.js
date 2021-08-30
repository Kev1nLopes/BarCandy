(function(){
    let btnnav = document.getElementById("btnnav");
    let menu = document.getElementById("menu");
    let lis = document.querySelectorAll("#menu li")
    let open = false;
    console.log(lis);

    btnnav.addEventListener("click", function(){
        open = !open;
        if(open == false){
            menu.style.width= "100px";
            lis.forEach((li)=>{
                li.style.display = "block"
            })
        }else{
            menu.style.width= "0px";
            lis.forEach((li)=>{
                li.style.display = "none"
            })
        }
        
    })
    

})();
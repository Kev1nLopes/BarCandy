(function(){
    let btnnav = document.getElementById("btnnav");
    btnnav.addEventListener("click", menuMobile);




   
})()





function menuMobile(){
    let menu = document.getElementById("menu");
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
    }else{
        menu.classList.add("active")
    }

   

}
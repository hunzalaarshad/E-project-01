let hamberger = document.getElementsByClassName("hamberger")[0];
let navigation = document.getElementsByClassName("navigation")[0];

hamberger.addEventListener("click", function(e){
    navigation.classList.toggle("active");
    hamberger.classList.toggle("fa-bars");
    hamberger.classList.toggle("fa-xmark");
    
})

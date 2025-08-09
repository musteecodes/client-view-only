const accordion = document.getElementsByClassName("other2-accordion-head");

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function() {
        var accordion_body = this.nextElementSibling;

        if(accordion_body.style.display === "block"){
            accordion_body.style.display = "none";

        }else{
            accordion_body.style.display = "block";
        }
    });
}
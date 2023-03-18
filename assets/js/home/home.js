$(document).ready(function () {
    let leftIcon = document.querySelector(".owl-carousel .left");
    let rightIcon = document.querySelector(".owl-carousel .right");
    function rightSlider() {
        let activeImage = document.querySelector(".active-image");
        activeImage.classList.remove("active-image");
        if (activeImage.nextElementSibling != null) {
            activeImage.nextElementSibling.classList.add("active-image");
        } else {
            activeImage.parentNode.firstElementChild.classList.add("active-image");
        }

    }

    function leftSlider() {
        let activeImage = document.querySelector(".active-image");
        activeImage.classList.remove("active-image");
        if (activeImage.previousElementSibling != null) {
            activeImage.previousElementSibling.classList.add("active-image");
        } else {
            activeImage.parentNode.lastElementChild.classList.add("active-image");
        }
    }
    leftIcon.addEventListener("click", leftSlider);
    rightIcon.addEventListener("click", rightSlider);


    
  
    $(".headers .item").click(function () {

        $(".active-menu").removeClass("active-menu")
        $(this).addClass("active-menu")


        let elements= $(".contents .item")
        for (const content of $(elements)) {
            if ($(this).attr("data-id") == $(content).attr("data-id")) {
                $(content).removeClass("d-none")
            } 
            else 
            {
                $(content).addClass("d-none")
            }
        }

    })



  
















})





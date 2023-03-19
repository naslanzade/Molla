$(document).ready(function () {
    $('.slide').slick({
        'setting-name': 'setting - value',
        'infinite':false,
        'nextArrow':'.fa-chevron-right',
        'prevArrow':'.fa-chevron-left'
});


function textAnimation(){
    let slides=document.querySelectorAll(".slick-slide")

    for(const slide of slides){
        if(slide.classList.contains("slick-active")){
            slide.lastElementChild.classList.add("content-animation")
        }
        else{
            slide.lastElementChild.classList.remove("content-animation")

        }
    }
}

textAnimation()


let leftIcon=document.querySelector(".fa-chevron-left")
let rightIcon=document.querySelector(".fa-chevron-right")

leftIcon.addEventListener("click",textAnimation)
rightIcon.addEventListener("click",textAnimation)

let slides=document.querySelectorAll(".slick-slide")

for(const slide of slides){
    slide.addEventListener("mouseleave",textAnimation)
}


$(".menues-edit .item").click(function () {

    $(".active-tab").removeClass("active-tab")
    $(this).addClass("active-tab")


    let elements= $(".card .image")
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





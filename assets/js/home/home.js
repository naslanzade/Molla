$(document).ready(function () {
    $('.slide').slick({
        'setting-name': 'setting - value',
        'infinite': false,
        'nextArrow': '.fa-chevron-right',
        'prevArrow': '.fa-chevron-left'
    });


    function textAnimation() {
        let slides = document.querySelectorAll(".slick-slide")

        for (const slide of slides) {
            if (slide.classList.contains("slick-active")) {
                slide.lastElementChild.classList.add("content-animation")
            }
            else {
                slide.lastElementChild.classList.remove("content-animation")

            }
        }
    }

    textAnimation()


    let leftIcon = document.querySelector(".fa-chevron-left")
    let rightIcon = document.querySelector(".fa-chevron-right")

    leftIcon.addEventListener("click", textAnimation)
    rightIcon.addEventListener("click", textAnimation)

    let slides = document.querySelectorAll(".slick-slide")

    for (const slide of slides) {
        slide.addEventListener("mouseleave", textAnimation)
    }


    $(".menues-edit .tab").click(function () {

        $(".active-tab").removeClass("active-tab")
        $(this).addClass("active-tab")    
        

        let elements = $(".card .image")
        for (const content of $(elements)) {
            if ($(this).attr("data-id") == $(content).attr("data-id")) {
                $(content).removeClass("d-none")
                
            }
            else {
                $(content).addClass("d-none")
            }

            console.log(content.parentNode.parentNode.parentNode);
        }

    })


    $("#top-products .right-heading .item").click(function(){
      
        $(".active-tab").removeClass("active-tab")
        $(this).addClass("active-tab")

        let elements=$("#top-products .box .image")
        for (const content of $(elements)) {
           

            if($(this).attr("data-id")==$(content).attr("data-id")){
                $(content.parentNode.parentNode).removeClass("d-none")
                console.log(  );
            }
            else{
                $(content.parentNode.parentNode).addClass("d-none")
            }
            
        }

    })


      $("#trending-products .right-heading .tab").click(function(){
      
        $(".active-tab").removeClass("active-tab")
        $(this).addClass("active-tab")

        let elements=$("#trending-products .box .image")
        for (const content of $(elements)) {
           

            if($(this).attr("data-id")==$(content).attr("data-id")){
                $(content.parentNode.parentNode).removeClass("d-none")
                console.log(  );
            }
            else{
                $(content.parentNode.parentNode).addClass("d-none")
            }
            
        }

    })


   



    let basketIcon = document.querySelectorAll(".add-basket");
    let basket = [];

    if(JSON.parse(localStorage.getItem("basket"))!=null){
        basket = JSON.parse(localStorage.getItem("basket")) 
    }
     

    basketIcon.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            let productPrice = parseInt(this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText)
            let productName = this.parentNode.nextElementSibling.nextElementSibling.innerText;
            let productImg = this.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute("src");
            let productId = parseInt(this.closest(".box").getAttribute("data-id"))   
            let existProduct = basket.find(m => m.id == productId);

            if (existProduct != undefined) {
                let nativePrice = existProduct.price/existProduct.count;
                existProduct.count += 1;
                existProduct.price =nativePrice*existProduct.count;
            } else {
                basket.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImg,
                    count: 1
                })
            }
            localStorage.setItem("basket", JSON.stringify(basket));
            getBasketCount(basket)
        })


    });

    getBasketCount(basket);

    function getBasketCount(arr) {
        let count = 0;
        for (const item of arr) {
            count += item.count
        }
        document.querySelector(".cart .basket").innerText = count;
    }



    let wishlistIcon=document.querySelectorAll(".add-wishlist");
    let wishlist=[];    

     if(JSON.parse(localStorage.getItem("wishlist"))!=null){
        wishlist = JSON.parse(localStorage.getItem("wishlist")) 
    }

    wishlistIcon.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            let productPrice = this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerText;
            let productName = this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
            let productImg = this.parentNode.previousElementSibling.previousElementSibling.getAttribute("src");
            let productId = parseInt(this.closest(".box").getAttribute("data-id"))           

            let existProduct = wishlist.find(m => m.id == productId);           
          
            

            if (existProduct != undefined) {
                existProduct.count += 1;
            } else {
                wishlist.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImg,
                    count: 1
                })
            }
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            getWishlistCount(wishlist)
        })


    });

    getWishlistCount(wishlist);
    

    function getWishlistCount(arr) {
        let count = 0;
        for (const item of arr) {
            count += item.count
        }
        document.querySelector(".favorite .wish").innerText = count;
    }
  


    window.onscroll = function () { myFunction() };

    var navbar = document.querySelector("#nav");
    var sticky = navbar.offsetTop;
  
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }



    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }


        
    })

    

  
    

})





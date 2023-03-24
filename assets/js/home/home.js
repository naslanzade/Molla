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


    $(".menues-edit .item").click(function () {

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

            let productPrice = this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerText;
            let productName = this.parentNode.nextElementSibling.nextElementSibling.innerText;
            let productImg = this.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute("src");
            let productId = parseInt(this.closest(".card").getAttribute("data-id"))   
                     

            
            let existProduct = basket.find(m => m.id == productId);
            

            if (existProduct != undefined) {
                existProduct.count += 1;
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
            let productId = parseInt(this.closest(".card").getAttribute("data-id"))           

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
  


})





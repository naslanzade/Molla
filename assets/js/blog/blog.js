$(document).ready(function () {
   
    let basketIcon = document.querySelectorAll(".add-basket");
    let basket = [];


    if(JSON.parse(localStorage.getItem("basket"))!=null){
        basket = JSON.parse(localStorage.getItem("basket")) 
    }
     

    basketIcon.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            let productPrice = this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerText;
            let productName = this.parentNode.nextElementSibling.innerText;
            let productImg = this.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute("src");
            let productId = parseInt(this.closest(".card").getAttribute("data-id"))

            console.log(productId)

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
        document.querySelector(".cart span").innerText = count;
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
            let productName = this.parentNode.nextElementSibling.nextElementSibling.innerText;
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
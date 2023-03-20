$(document).ready(function () {

    $('.slide').slick({
        'setting-name': 'setting - value',
        'infinite': false,
        'nextArrow': '.fa-chevron-right',
        'prevArrow': '.fa-chevron-left'
    });
   
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




    


})
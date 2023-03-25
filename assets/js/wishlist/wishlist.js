$(document).ready(function () {

    let basketIcon = document.querySelectorAll(".add-basket");
    let basket = [];


    if (JSON.parse(localStorage.getItem("basket")) != null) {
        basket = JSON.parse(localStorage.getItem("basket"))
    }


    basketIcon.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            let productPrice = this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerText;
            let productName = this.parentNode.nextElementSibling.nextElementSibling.innerText;
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
   


    let tableBody = document.querySelector("tbody");
    let alert = document.querySelector(".icon");
    let products = JSON.parse(localStorage.getItem("wishlist"));

    if (products != null) {
        products.forEach(product => {
            tableBody.innerHTML += `<tr data-id="${product.id}">
            <td><img src="${product.image}" alt=""></td>
            <td class="name">${product.name}</td>
            <td class="price">${product.price}</td>
            <td class="stock">In Stock</td>
            <td class="option"><a href="" class="btn btn-primary">
            <i class="fa-solid fa-cart-plus"></i><span>ADD TO CART</span></a></td>
            <td><i class="fa-solid fa-xmark"></i></td>
            </tr>`

        });
    } else {
        tableBody.parentNode.classList.add("d-none")
        alert.classList.remove("d-none")
    }


    if (products != null) {
        getWishlistCount(products)
    }

    let deleteIcon = document.querySelectorAll(".fa-xmark")

    deleteIcon.forEach(btn => {

        btn.addEventListener("click",function(){


            let id=parseInt(this.parentNode.parentNode.getAttribute("data-id"))
            products=JSON.parse(localStorage.getItem("wishlist"))
            let result=products.filter(m=>m.id!=id)

            localStorage.setItem("wishlist",JSON.stringify(result));
            this.parentNode.parentNode.remove();
            getWishlistCount(result)
        })
        
    });

    

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
















})
$(document).ready(function () {

    let wishlistIcon = document.querySelectorAll(".add-wishlist");
    let wishlist = [];

    if (JSON.parse(localStorage.getItem("wishlist")) != null) {
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

    let tableBody = document.querySelector("tbody");
    let alert = document.querySelector(".icon");
    let input = document.querySelectorAll("input")
    let totalPrice=document.querySelector(".total-value")
    let products = JSON.parse(localStorage.getItem("basket"))

    if (products != null) {

        products.forEach(product => {
            tableBody.innerHTML += `<tr data-id="${product.id}">
            <td><img src="${product.image}" alt=""></td>
            <td class="name">${product.name}</td>
            <td class="price">${product.price}</td>
            <td>
            <div class="count">
            <i class="fa-solid fa-minus minus"></i>
            <input type="number" value="${product.count}" min="1" max="10" disabled>
            <i class="fa-solid fa-plus plus"></i>
            <td class="-total">${parseInt(product.price.replace("$", "")) * product.count} $</td>
            <td><i class="fa-solid fa-xmark"></i></td>        
        </tr>`

        });
    } else{
        tableBody.parentNode.classList.add("d-none")
        alert.classList.remove("d-none")
    }


    if (products != null) {
        getProductCount(products)
    }


  
    let deleteIcon = document.querySelectorAll(".fa-xmark")

    deleteIcon.forEach(btn => {

        btn.addEventListener("click",function(){
            let id=parseInt(this.parentNode.parentNode.getAttribute("data-id"))
            products=JSON.parse(localStorage.getItem("basket"))
            let result=products.filter(m=>m.id!=id)

            localStorage.setItem("basket",JSON.stringify(result));
            this.parentNode.parentNode.remove();
            getProductCount(result)
        })
        
    });


    























    function getProductCount(arr) {
        let count = 0;
        for (const item of arr) {
            count += item.count

        }
        document.querySelector(".cart .basket").innerText = count
    }


    function price(products) {
        let sum = 0;
        for (const product of products) {
            sum += parseInt(product.price.replace("$",""))*product.count;
        }
        return sum;
    }






})
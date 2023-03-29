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




    let tableBody = document.querySelector("tbody");
    let alert = document.querySelector(".icon");    
    let totalPrice = document.querySelector(".total-value")
    let products = JSON.parse(localStorage.getItem("basket"))


    if (totalPrice.innerText == "") {
        totalPrice.innerText = "$ 0"
    }

    totalPrice.innerText = `$ ${price(products)}`


    if (products != null) {
        products.forEach(product => {
            tableBody.innerHTML += `<tr data-id="${product.id}">
            <td><img src="${product.image}" alt=""></td>
            <td class="name">${product.name}</td>
            <td class="price">${product.price}</td>
            <td class="product-count" data-id = ${product.id}>
            <div class="pr-count"
            <span class="minus" data-id="${product.id}">-</span>
            <span class="count" data-id=${product.id}>${product.count}</span>
            <span class="plus" data-id="${product.id}">+</span>
            </div>
            </td>
            <td class="-total">$ ${parseInt(product.price.replace("$", "")) * product.count}</td>
            <td><i class="fa-solid fa-xmark"></i></td>        
        </tr>`

        });
    } else {
        tableBody.parentNode.classList.add("d-none")
        alert.classList.remove("d-none")
    }


    if (products != null) {
        getProductCount(products)
    }



    let deleteIcon = document.querySelectorAll(".fa-xmark")

    deleteIcon.forEach(btn => {

        btn.addEventListener("click", function () {
            let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"))
            products = JSON.parse(localStorage.getItem("basket"))
            let result = products.filter(m => m.id != id)

            localStorage.setItem("basket", JSON.stringify(result));
            this.parentNode.parentNode.remove();
            getProductCount(result)
        })

    });


    let decreaseButtons = document.querySelectorAll(".minus")
    let increaseButtons = document.querySelectorAll(".plus")
    let count = document.querySelectorAll(".count");



    decreaseButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            let product = products.find(m => m.id == btn.getAttribute("data-id"))
            if (product.count > 1) {
                product.count--;
                localStorage.setItem("basket", JSON.stringify(products))

                for (const count of countProduct) {
                    if (count.getAttribute("data-id") == btn.getAttribute("data-id")) {
                        count.innerText = count.innerText - 1
                    }
                }
            }

            count.innerText = getBasketCount(JSON.parse(localStorage.getItem("basket")))


        })
    });


    increaseButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            let product = products.find(m => m.id == btn.getAttribute("data-id"))
            product.count++;
            localStorage.setItem("basket", JSON.stringify(products))

            for (const count of countProduct) {
                if (count.getAttribute("data-id") == btn.getAttribute("data-id")) {
                    count.innerText = parseInt(count.innerText) + 1
                }
            }

            count.innerText = getBasketCount(JSON.parse(localStorage.getItem("basket")))
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
            sum += parseInt(product.price.replace("$", "")) * product.count;
        }
        return sum;
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
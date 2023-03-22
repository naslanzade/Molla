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
    
  
    let categoryBar=document.querySelector(".category")
    let closeCategory=document.querySelector(".product-category .close")
    let openCategory=document.querySelector(".product-category .open")
    let categoryProduct=document.querySelector(".product-category .product")


    openCategory.addEventListener("click",function(){
        categoryBar.classList.remove("hide");
        this.classList.add("d-none");
        closeCategory.classList.remove("d-none")
        categoryProduct.classList.remove("d-none");
    })

    closeCategory.addEventListener("click",function(){
        categoryBar.classList.add("hide");
        this.classList.add("d-none");
        openCategory.classList.remove("d-none")
        categoryProduct.classList.add("d-none");
    })


    let sizeBar=document.querySelector(".size")
    let closeSize=document.querySelector(".product-size .close")
    let openSize=document.querySelector(".product-size .open")
    let sizeProduct=document.querySelector(".product-size .product")


    openSize.addEventListener("click",function(){
        sizeBar.classList.remove("hide");
        this.classList.add("d-none");
        closeSize.classList.remove("d-none")
        sizeProduct.classList.remove("d-none");
    })

    closeSize.addEventListener("click",function(){
        sizeBar.classList.add("hide");
        this.classList.add("d-none");
        openSize.classList.remove("d-none")
        sizeProduct.classList.add("d-none");
    })


    let colorBar=document.querySelector(".color")
    let closeColor=document.querySelector(".product-color .close")
    let openColor=document.querySelector(".product-color .open")
    let colorProduct=document.querySelector(".product-color .product")


    openColor.addEventListener("click",function(){
        colorBar.classList.remove("hide");
        this.classList.add("d-none");
        closeColor.classList.remove("d-none")
        colorProduct.classList.remove("d-none");
    })

    closeColor.addEventListener("click",function(){
        colorBar.classList.add("hide");
        this.classList.add("d-none");
        openColor.classList.remove("d-none")
        colorProduct.classList.add("d-none");
    })


    let brandBar=document.querySelector(".brand")
    let closeBrand=document.querySelector(".product-brand .close")
    let openBrand=document.querySelector(".product-brand .open")
    let brandProduct=document.querySelector(".product-brand .product")


    openBrand.addEventListener("click",function(){
        brandBar.classList.remove("hide");
        this.classList.add("d-none");
        closeBrand.classList.remove("d-none")
        brandProduct.classList.remove("d-none");
    })

    closeBrand.addEventListener("click",function(){
        brandBar.classList.add("hide");
        this.classList.add("d-none");
        openBrand.classList.remove("d-none")
        brandProduct.classList.add("d-none");
    })

    let priceBar=document.querySelector(".price")
    let closePrice=document.querySelector(".product-price .close")
    let openPrice=document.querySelector(".product-price .open")
    let priceProduct=document.querySelector(".product-price .product")


    openPrice.addEventListener("click",function(){
        priceBar.classList.remove("hide");
        this.classList.add("d-none");
        closePrice.classList.remove("d-none")
        priceProduct.classList.remove("d-none");
    })

    closePrice.addEventListener("click",function(){
        priceBar.classList.add("hide");
        this.classList.add("d-none");
        openPrice.classList.remove("d-none")
        priceProduct.classList.add("d-none");
    })















    


})
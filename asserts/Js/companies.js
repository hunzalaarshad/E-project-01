let cart = document.getElementsByClassName("select-company-cart");
let count = document.getElementById("count");
let companyNameTitle = document.getElementById("companyName")
let cartContainer = document.getElementsByClassName("cart-container")[0];
let type = "all plans";

let cartData = [
    {
        companyName: "Zurich Insurance",
        price: "PKR 45,500",
        title: "Premium Protection Plan",
        dsc: "Comprehensive coverage for your vehicle with zero depreciation",
        features: ["Third Party Liability", "Own Damage", "Zero Depreciation"],
        whealer: "four whealers"
    },
    {
        companyName: "Jubilee Insurance",
        price: "PKR 32,000",
        title: "Standard Shield Plan",
        dsc: "Essential coverage for daily commuters",
        features: ["Third Party Liability", "Own Damage", "Fire & Theft"],
        whealer: "four whealers"
    },
    {
        companyName: "Adamjee Insurance",
        price: "PKR 52,000",
        title: "Elite Coverage Plan",
        dsc: "Premium protection with maximum benefits",
        features: ["Third Party Liability", "Own Damage", "Zero Depreciation"],
        whealer: "four whealers"

    },
    {
        companyName: "Allianz Insurance",
        price: "PKR 28,000",
        title: "Value Saver Plan",
        dsc: "Budget-friendly comprehensive insurance",
        features: ["Third Party Liability", "Own Damage", "Zero Depreciation"],
        whealer: "four whealers"
    },
    {
        companyName: "Aga Khan Insurance",
        price: "PKR 38,000",
        title: "Complete Care Plan",
        dsc: "All-inclusive protection for your vehicle",
        features: ["Third Party Liability", "Own Damage", "Engine Protection"],
        whealer: "four whealers"
    },
    {
        companyName: "Zurich Insurance",
        price: "PKR 8,000",
        title: "Bike Guard Plan",
        dsc: "Comprehensive protection for two-wheelers",
        features: ["Third Party Liability", "Own Damage", "Engine Protection"],
        whealer: "two whealers"
    },
    {
        companyName: "Jubilee Insurance",
        price: "PKR 12,000",
        title: "Rider Protection Plan",
        dsc: "Enhanced coverage for bike enthusiasts",
        features: ["Third Party Liability", "Own Damage", "Zero Depreciation"],
        whealer: "two whealers"
    },
    {
        companyName: "Adamjee Insurance",
        price: "PKR 6,500",
        title: "Two Wheeler Essential",
        dsc: "Basic coverage at affordable rates",
        features: ["Third Party Liability", "Own Damage", "Zero Depreciation"],
        whealer: "two whealers"
    },
    {
        companyName: "Allianz Insurance",
        price: "PKR 9,500",
        title: "Smart Bike Plan",
        dsc: "Smart insurance for smart riders",
        features: ["Third Party Liability", "Own Damage", "Fire & Theft"],
        whealer: "two whealers"
    },
]

const createCart = (data) => {
    return `<div class="cart">
                    <div class="cart-cmp-name">${data.companyName}</div>
                    <div class="cart-header">
                        <div class="str-from">starting from</div>
                        <h2 class="cart-pkr">${data.price}</h2>
                        <div class="per-year">Per year</div>
                    </div>
                    <div class="cart-title">
                        <h2>${data.title}</h2>
                    </div>
                    <div class="cart-body">
                        <p>${data.dsc}</p>
                        <h2 class="cart-list-heading">Coverage includes</h2>
                        <ul>
                            <li>${data.features[0]}</li>
                            <li>${data.features[1]}</li>
                            <li>${data.features[2]}</li>
                        </ul>
                    </div>
                    <div class="cart-footer">
                        <button>View Details <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>`
}


const showCarts = (cartData, type) => {
    cartContainer.innerHTML = "";

    let filterData;

    if(type == "all plans"){
        filterData = cartData;
    }else{
        filterData = cartData.filter(item => item.companyName === type)
    }

   filterData.forEach(item => {
    cartContainer.innerHTML += createCart(item);
   })
   count.innerHTML = `${filterData.length} Plans available`
}
showCarts(cartData, type);

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function () {
        for(let d = 0; d < cart.length; d++){
            cart[d].removeAttribute("disabled")
            cart[d].classList.remove("active")
            cart[d].classList.remove("select-company-active-cart");
        }
        cart[i].classList.add("select-company-active-cart");
        let type = this.dataset.type;
        this.setAttribute("disabled", true)
        showCarts(cartData, type)
        companyNameTitle.innerHTML = `Plans from ${type}`
    })
}







var userCart = JSON.parse(localStorage.getItem("cartData")) || []

var cartMrpTotal = userCart.reduce(function(sum,element){
    return sum + Number(element.productStriked)
},0)

var cartTotal = userCart.reduce(function(sum,element){
    return sum + Number(element.productPrice)
},0)

var cartDiscount = cartMrpTotal - cartTotal

document.querySelector(".mrp-value").innerText = "Rs." + Number(cartMrpTotal).toFixed(2)
document.querySelector(".cart-value").innerText = "Rs." + Number(cartTotal).toFixed(2)
document.querySelector(".discount").innerText  = "-"+"Rs." + Number(cartDiscount).toFixed(2)
document.querySelector(".savings").innerText ="TOTAL SAVINGS RS."+ Number(cartDiscount).toFixed(2)
document.querySelector(".total-value").innerText = "Rs."+(Number(cartTotal).toFixed(2))

if(userCart.length == 0){
      window.location.href = "emptyCart.html"
}
else{
    
    userCart.map(function(element,index){

        var imageProduct = document.createElement("img")
        imageProduct.setAttribute("class","image-product")
        imageProduct.src = element.productImg

        var divison = document.createElement("div")
        divison.setAttribute("class","divison")

        var description = document.createElement("h3")
        description.setAttribute("class","desc")
        description.innerText = element.productName

        var amount = document.createElement("p")
        amount.setAttribute("class","amount")
        amount.innerText = element.productPrice


         var span2 = document.createElement("span")
         span2.setAttribute("class","span2")

         var strikedMrp = document.createElement("strike")
         strikedMrp.setAttribute("class","strikedValue")
         strikedMrp.innerText = element.productStriked

         span2.append(strikedMrp)

        var buttonRemove = document.createElement("button")
        buttonRemove.setAttribute("class","remove-button")
        buttonRemove.innerText = "REMOVE"
        buttonRemove.addEventListener("click",function(){
            removeFromCart(element,index)
        })

        var line = document.createElement("hr")

        divison.append(imageProduct,description,amount,span2,buttonRemove,line)
         document.querySelector(".box-contents").append(divison)
        
        })
}

function removeFromCart(element,index){
    userCart.splice(index,1)
    localStorage.setItem("cartData",JSON.stringify(userCart))
    window.location.reload()
}

document.querySelector(".checkout-button").addEventListener("click",paymentFunc)

function paymentFunc(){
    window.location.href = "payment.html"
}


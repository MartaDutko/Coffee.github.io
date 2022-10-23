window.addEventListener(`scroll`,(e)=>{
console.log(window.scrollY);
let order=document.querySelector(`.order__body`)
let swipe=document.querySelector(`.order_swipe`)
if(window.scrollY > 1036 && window.scrollY < 1500){
    order.style.overflow=`scroll`
    swipe.style.display=`none`
}
})

document.querySelector(`.header__burger`).addEventListener(`click`,()=>{
document.querySelector(`body`).classList.toggle(`active-body`)
document.querySelector(`.header__menu`).classList.toggle(`active`)
})


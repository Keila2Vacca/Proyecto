const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("#body");
const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

window.addEventListener("scroll", function () {
 if (contenedor.getBoundingClientRect().top<10) {
    header.classList.add("scroll")
 } else {
    header.classList.remove("scroll")
 }   
})

btnIncrement,addEventListener('click', () => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

btnDecrement,addEventListener('click', () => {
    if (valueByDefault === 1) {
       return 
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})
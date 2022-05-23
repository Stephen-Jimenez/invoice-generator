let servicesRequested = []
let total = 0
const washBtn = document.getElementById("wash")
const mowBtn = document.getElementById("mow")
const weedBtn = document.getElementById("weed")
const selectedServices = document.getElementById("selected-services")
const totalAmount = document.getElementById("total-amount")
const sendBtn = document.getElementById("send-btn")

totalAmount.innerHTML = `<p id="zero-total">$${total}</p>`

function render() {
    let servicesToRender = ""
    for (let i = 0; i < servicesRequested.length; i ++) {
        if (servicesRequested[i] === "Wash Car") {
            servicesToRender += `<div class="rendered-service"><p>${servicesRequested[i]}</p><p>$10</p></div>`
        }
        else if (servicesRequested[i] === "Mow Lawn") {
            servicesToRender += `<div class="rendered-service"><p>${servicesRequested[i]}</p><p>$20</p></div>`
        }
        else {
            servicesToRender += `<div class="rendered-service"><p>${servicesRequested[i]}</p><p>$30</p></div>`
        }
    }
    selectedServices.innerHTML = servicesToRender
    totalAmount.innerHTML = `<div class = "notes-total"><p>We accept cash, credit card, or Paypal</p><p id="final-total">$${total}</p></div>`
}

washBtn.addEventListener("click", function() {
    if (servicesRequested.indexOf("Wash Car") === -1) {
        servicesRequested.push("Wash Car")
        total += 10
        render()
    }
})

mowBtn.addEventListener("click", function() {
    if (servicesRequested.indexOf("Mow Lawn") === -1) {
        servicesRequested.push("Mow Lawn")
        total += 20
    }
    render()
})

weedBtn.addEventListener("click", function() {
    if (servicesRequested.indexOf("Pull Weeds") === -1) {
        servicesRequested.push("Pull Weeds")
        total += 30
    }
    render()
})

sendBtn.addEventListener("click", function() {
    servicesRequested = []
    total = 0
    render()
    totalAmount.innerHTML = `<p id="zero-total">$${total}</p>`
})
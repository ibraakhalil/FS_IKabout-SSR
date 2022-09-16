const items = document.querySelectorAll(".admin .item")
const modal = document.querySelector(".modal")
const times = document.querySelector(".modal .close")

times.addEventListener("click", (e) => {
    modal.classList.remove("show")
})
 
items.forEach((item, i) => {
    item.addEventListener("click", () => {
        const name = item.querySelector(".name")
        const email = item.querySelector(".email")
        const message = item.querySelector(".message")
        const modalName = modal.querySelector(".signature")
        const modalEmail = modal.querySelector(".email")
        const modalMessage = modal.querySelector(".text")

        modal.classList.add("show")

        modalName.innerHTML = name.innerHTML
        modalMessage.innerHTML = message.innerHTML
        modalEmail.innerHTML = email.innerHTML

    })


})


//////////////////////////////Setting cog Dropdown////////////////////////////////

(function () {
    let setting = document.querySelector("section.header .setting i");
    let setting2 = document.querySelector("section.header .setting");

    setting.addEventListener("click", () => {
        setting2.classList.toggle("show")
    })
})();



//////////////////////Responsive Nav menu Open-close ///////////////////////

(function () {
    // let spans = document.querySelectorAll(".education .right .skill > div span");
    // let paras = document.querySelectorAll("section.education .right .skill > div div span p");

    // spans.forEach(function (span, index) {
    //     let data = span.dataset.filter;
    //     span.style.width = `${data}%`;
    //     paras[index].innerHTML = `${data}%`;
    // })

    let bar = document.querySelector("section.header .bar");
    let headerMenu = document.querySelector(".header-left .header-menu");
    let lists = document.querySelectorAll('section.header .header-left .header-menu li')
    let ham = document.querySelector('section.header .ham')
    bar.addEventListener("click", () => headerMenu.classList.toggle('active'))
    lists.forEach(list => list.addEventListener('click', () => {
        headerMenu.classList.remove('active')
        ham.classList.remove('active')
    }))

})();



///////////////////////////////Theme switcher///////////////////////////////////

(function () {
    const isTheme = localStorage.getItem('theme')
    if (isTheme === null) {
        localStorage.setItem('theme', 'checked')
    }

    const body = document.querySelector('body')
    const themeSwitch = document.querySelector(".theme-switch .switch")
    const theme = localStorage.getItem('theme')
    body.classList = theme

    themeSwitch.addEventListener('click', (e) => {
        body.classList.toggle('checked')
        localStorage.setItem('theme', `${theme == '' ? 'checked' : ""}`)
    })
})();


///////////////////////////////Flash Message Timeout///////////////////////////////////

(function () {
    const flashMessage = document.querySelector(".flash-message")

    flashMessage && setTimeout(() => {
        flashMessage.style.display = "none"
    }, 4900);
})()
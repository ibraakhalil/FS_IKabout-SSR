



//////////////////////////////Setting cog Dropdown////////////////////////////////

(function () {

    function windowClickExit() {
        let dropDown = document.querySelector("section.header .dropdown")

    }

    let setting = document.querySelector("section.header .setting i");
    let setting2 = document.querySelector("section.header .setting");


    setting.addEventListener("click", function () {
        setting2.classList.toggle("show")
    })

})();



//////////////////////Responsive Nav menu Open-close ///////////////////////

(function () {
    let spans = document.querySelectorAll(".education .right .skill > div span");
    let paras = document.querySelectorAll("section.education .right .skill > div div span p");

    spans.forEach(function (span, index) {
        let data = span.dataset.filter;
        span.style.width = `${data}%`;
        paras[index].innerHTML = `${data}%`;
    })

    let bars = document.querySelectorAll("section.header .bar i");
    let headerMenu = document.querySelector(".header-left .header-menu");
    bars.forEach(function (bar, index) {
        bar.addEventListener("click", function (e) {

            if (index == 0) {
                headerMenu.style.transform = "translateX(0%)";
                bars[1].style.display = "block";
                bar.style.display = "none";
            } else {
                headerMenu.style.transform = "translateX(-100%)";
                bars[0].style.display = "block";
                bar.style.display = "none";
            }
        })
    })

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
        localStorage.setItem('theme', `${theme == '' ? 'checked': "" }`)
    })
})();


///////////////////////////////Flash Message Timeout///////////////////////////////////

// (function () {
//     const flashMessage = document.querySelector(".flash-message")

//     setTimeout(() => {
//         flashMessage.style.display = "none"
//     }, 5000);
// })()
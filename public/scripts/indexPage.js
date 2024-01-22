//////////////////////Header height shrink After Scroll///////////////////////
(function () {
    let header = document.querySelector("section.header");
    let content = document.querySelector("section.content");

    let options = {
        threshold: 0.9
    }
    let shrinkHeader = function (entries) {
        if (entries[0].isIntersecting) {
            header.classList.remove("scrolled")
        } else {
            header.classList.add("scrolled")
        }
    }
    let observer = new IntersectionObserver(shrinkHeader, options)

    observer.observe(content)
})();


/////////////////////////Header Text bottom-border Growing//////////////////////
(function () {
    let span = document.querySelectorAll(".header-text span");


    span.forEach(function (item) {
        let option = {
            rootMargin: "-200px"
        }
        let growingWith = function (entries) {
            if (entries[0].isIntersecting) {
                item.classList.add("active")
            }
        }
        let observer = new IntersectionObserver(growingWith, option)
        observer.observe(item)
    })
})();


//////////////////////Portfolio Data and Transition/////////////////////////////
(function () {
    let body = document.querySelector('body')
    let categoriesBtn = document.querySelectorAll(".portfolio .inner-top button")
    let portfolio = document.querySelector(".portfolio")
    let modal = document.querySelector(".portfolio .modal")
    let portFolioWrapper = document.querySelector(".portfolio .wrapper")

    function loopingPortfolioData(loopTarget) {
        portfolioData[loopTarget].map(data => {
            let div = document.createElement("div")
            div.setAttribute("class", "item")
            div.setAttribute("style", `background:url(${data.background})`)
            div.innerHTML = `<p class="item-name">${data.name}</p>`
            portFolioWrapper.append(div)

            div.addEventListener('click', (e) => {
                portfolio.classList.add('active')
                body.style.overflowY = 'hidden'
                modal.querySelector('.top h3').innerHTML = data.name
                modal.querySelector('img').setAttribute("src", `${data.background}`)
                modal.querySelector('.github').setAttribute('href', data.githubLink)
                modal.querySelector('.live').setAttribute('href', data.liveLink)
                modal.querySelector('.description p').innerHTML = data.description
                modal.querySelector('.used-skills ul').innerHTML = data.skills.reduce((a, b) => a + `<li>${b}</li>`, '')
            })
        })
    }

    categoriesBtn.forEach((button) => {
        button.addEventListener("click", function (e) {
            let target = e.target
            portFolioWrapper.innerHTML = ""
            categoriesBtn.forEach(btn => btn.classList.remove('active'))
            target.classList.add('active')
            loopingPortfolioData(target.innerText.toLowerCase())
        })
    })

    loopingPortfolioData('fullstack')
    modal.addEventListener('click', (e) => {
        const target = e.target.className === 'modal' || e.target.className === 'inner'
        if (target) {
            portfolio.classList.remove('active')
            body.style.overflowY = 'auto'
        }
    })
})();


////////////////////////////Contact Form focus Effect///////////////////////////
(function () {

    let inputDivs = document.querySelectorAll("section.contact .right .input-wrapper .input")

    inputDivs.forEach(function (inputDiv) {
        let input = inputDiv.querySelector("input")

        input.addEventListener("focusin", function () {
            inputDiv.classList.add("focus");
        })
        input.addEventListener("focusout", function () {
            inputDiv.classList.remove("focus");
        })
    })
})();










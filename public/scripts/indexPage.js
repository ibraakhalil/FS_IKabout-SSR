
//////////////////////////////////////////////////////////////////////////////
//////////////////////Header height shrink After Scroll///////////////////////
//////////////////////////////////////////////////////////////////////////////

(function(){
    let header = document.querySelector("section.header");
    let content = document.querySelector("section.content");

    let options = {
        threshold: 0.7
    }
    let shrinkHeader = function(entries){
        if(entries[0].isIntersecting){
            header.classList.remove("scrolled")
        } else {
            header.classList.add("scrolled")
        }
    }
    let observer = new IntersectionObserver(shrinkHeader,options)

    observer.observe(content)
})();


///////////////////////////////Hire me button click///////////////////////////////////

(function(){

    let button = document.querySelector(".content .btn-group > button")
    let marketplaceDive = document.querySelector(".content .btn-group .marketplace")

    button.addEventListener("click",function(){
        button.parentElement.classList.toggle("show");
    })

})();

////////////////////////////////Header Text bottom-border Growing////////////////////////////////

(function(){
    let span = document.querySelectorAll(".header-text span");


    span.forEach(function(item){
        let option = {
            rootMargin: "-200px"
        }
        let growingWith = function(entries){
            if(entries[0].isIntersecting){
                item.classList.add("active")
            }
        }
        let observer = new IntersectionObserver(growingWith, option)
        observer.observe(item)
    })
})();




/////////////////////////////Portfolio Data and Transition///////////////////////////////////

(function(){

    // const portfolioItemData = require("./portfolio_data")

    let buttons = document.querySelectorAll(".portfolio .inner-top button")
    let portFolioWrapper = document.querySelector(".portfolio .wrapper")

    function item(target,index){
        let appendItem = 
        `<p class="item-name">${portfolioItemData[target][index].name}</p>
            <div class="hover-content">
                <div class="wrapper-2">
                    <div class="description">
                    ${portfolioItemData[target][index].description}
                    </div>
                    <button class="btn btn-primary">View<span></span></button>
                </div>
            </div>`;

        return appendItem;
    }

    buttons.forEach(function(button,index){
        button.addEventListener("click",function(e){
            let target = e.target.innerText.toLowerCase();
            if(target){
                portFolioWrapper.innerHTML = ""
                for(let i=0; i < portfolioItemData[target].length; i++){
                    let creatItem = document.createElement("div")
                    creatItem.setAttribute("class","item")
                    creatItem.setAttribute("style",`background:url(./resource/Photo/portfolio/${portfolioItemData[target][i].background})`)
                    creatItem.innerHTML = item(target,i)

                    portFolioWrapper.append(creatItem)
                }
            }
        })
    })
    for(let i=0; i < portfolioItemData["frontend"].length; i++){
        let creatItem = document.createElement("div")
        creatItem.setAttribute("class","item")
        creatItem.setAttribute("style",`background:url(./resource/Photo/portfolio/${portfolioItemData["frontend"][i].background})`)
        creatItem.innerHTML = item("frontend",i)

        portFolioWrapper.append(creatItem)
    }




})();






/////////////////////////////////////Contact Form focus Effect///////////////////////////////



(function(){

    let inputDivs = document.querySelectorAll("section.contact .right .input-wrapper .input")

    inputDivs.forEach(function(inputDiv){
        let input = inputDiv.querySelector("input")

        input.addEventListener("focusin",function(){
            inputDiv.classList.add("focus");
        })
        input.addEventListener("focusout",function(){
            inputDiv.classList.remove("focus");
        })
    })
})();










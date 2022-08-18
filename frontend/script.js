const headerComponent = function () {
    return `
    <header>${companies.logo}
    <span class="material-symbols-outlined">
    menu
    </span>
    </header>
    `
}

const cardsComponent = function () {
    html = ""

    for (company of companies.cards) {
        html+= `
        <div class="main-container">
         <div class="cards-container">
            <div class="cards-inner">
                 <p class="sub">${company.sub}</p>
                <h1 class="title">${company.title}</h1>
                <p class="text">${company.text}</p>
             </div>
            <button class="visit">${companies.button}</button>
            <span class="material-symbols-outlined" id="arrow">
            arrow_forward
            </span>
            </div>
        </div>
        `
    }
return html
}





const loadEvent = function () {
    const rootElement = document.getElementById("root")
    
    rootElement.insertAdjacentHTML("beforeend", headerComponent())
    rootElement.insertAdjacentHTML("beforeend", cardsComponent())
}

window.addEventListener("load", loadEvent)
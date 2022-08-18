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
         <div class="cards-container">
            <div class="cards-inner">
                <h1>${company.title}</h1>
                <p>${company.text}</p>
                <p>${company.sub}</p>
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
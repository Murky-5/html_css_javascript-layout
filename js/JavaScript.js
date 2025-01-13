const bodyElm = document.getElementById("my-body")
const containerCardsElm = document.getElementById("card-container")
const overlayElm = document.querySelector(".my-blur")

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(({data}) => {
    for (let i = 0; i < data.length; i++) {
        let {thumbnailUrl, id, title} = data[i]
        containerCardsElm.innerHTML += `
         
        <div class="card">
            <div class="dot">
                <img src="./img/pin.svg" alt="pointer">
            </div>  
            <div class="border-card p-5">
                <div class="img">
                    <img src="${thumbnailUrl}" alt="${id}">
                </div>
                <p>${title}</p>
            </div>
        </div>
        `
    }

const cardsElm = document.querySelectorAll(".card")
    cardsElm.forEach((each) => {
        each.addEventListener("click", () => {
            let clicked = each.querySelector(".border-card img").src
            overlayElm.innerHTML = `
            <button type="button" class="btn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Chiudi</button>
            <img src="${clicked}" alt="">
            `
            overlayElm.classList.toggle("display")
            
            const buttonElm = document.querySelector(".btn")
            buttonElm.addEventListener("click", () => {
                overlayElm.classList.toggle("display")
            })
        })
    })


})


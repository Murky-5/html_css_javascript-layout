const cardElm = document.getElementById("card-container")

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(({data}) => {
    for (let i = 1; i <= id; i++) {
        cardElm.innerHTML += `   
        <div class="card">
            <div class="border-card p-5">
                <div class="img">
                    <img src="${thumbnailUrl}" alt="${id}">
                </div>
                <p>${title}</p>
            </div>
        </div>
        `
    }
    console.log(data, data.title, data.thumbnailUrl)
})
.catch(() => {
})
console.log(axios.length)

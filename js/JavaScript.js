const cardElm = document.getElementById("card-container")
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(({data}) => {
    for (let i = 0; i < data.length; i++) {
        let {thumbnailUrl, id, title} = data[i]
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
})


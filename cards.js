async function getData() {
    let res = await fetch("./cards.json");
    return await res.json()
}
getData().then((data) => {
    console.log(data)
    data.forEach(i => {
        // let card = document.createElement("div");
        // card.setAttribute("id", "card")
        // let img = document.createElement("img");
        // img.setAttribute("src", i.image)
        // card.appendChild(img)
        // let txt = document.createElement("div")
        // txt.setAttribute("id", "text")
        // card.appendChild(txt)
        // let name = document.createElement("div");
        // name.setAttribute("id", "name");
        // txt.appendChild(name)
        // let role = document.createElement("div");
        // role.setAttribute("id", "role");
        // txt.appendChild(role)
        // name.innerText = i.name;
        // role.innerText = i.role;


        let card =  
        `
        <div id="card">
            <img src=${i.image} alt="">
            <div id="text">
                <div id="name">${i.name}</div>
                <div id="role">${i.role}</div>
            </div>
        </div>
        `;


        
        let cards = document.querySelector(".cards");
        // cards.appendChild(card);
        cards.innerHTML += card
        console.log(cards)
    });
}
).catch((err) => {
    console.log(err)
})

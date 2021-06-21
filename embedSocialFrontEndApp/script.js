let cardWrapper = document.querySelector('.cards-wrapper')
console.log(cardWrapper)
let card = document.querySelector('.card');

function cardBuilder(data) {

    cardWrapper.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        cardWrapper.innerHTML += `
        <div class="card">
        <div class="inside-card info">
        <div class="profile-image">
             <img src="${data[i].profile_image}">
            <div class="name-date">   
                   ${data[i].name}
                   ${data[i].date}
            </div>
        </div>  
        <div class="logo">
        <img src="./icons/instagram-logo.svg" alt="">
        </div>
    </div>
    <div class="inside-card image">
    <img src="${data[i].image}">
    </div>
    <div class="inside-card caption"><h1>${data[i].caption}</h1></div>
    <br>
    <br>
    <hr>
    <div class="inside-card likes"><img src="./icons/heart.svg" alt="">${data[i].likes}</div>
    </div>
    `
    }
}

function fetchData() {

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                cardBuilder(data)
            }
        })
}

fetchData();
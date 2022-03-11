function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((json) => renderDogs(json));
  }

function renderDogs (dogs) {
    let table = Object.values(dogs)[0]
    table.forEach(dog => {
        let picList = document.getElementById("dog-image-container")
        const img = document.createElement("img")
        img.src = dog
        picList.appendChild(img)
    })
}

let breeds = []

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((json) => {
        breeds = Object.keys(Object.values(json)[0])
        renderBreeds();
  })}

function renderBreeds () {
    breeds.forEach(breed => {
        let breedList = document.getElementById("dog-breeds")
        const li = document.createElement("li")
        li.innerText = breed
        li.addEventListener("click", () => {
            li.style.color = "blue"
        })
        breedList.appendChild(li)
    })
}

let drop = document.querySelector("#breed-dropdown")
drop.addEventListener("change", filter)

function filter() {
    let list = document.getElementById("dog-breeds")
    let breeds = list.getElementsByTagName("li")
    let dropdown = document.querySelector("#breed-dropdown").value
    for (breed in breeds) {
        breeds[breed].setAttribute("style","")  
        if (breeds[breed].innerText[0] !== dropdown) {
            console.log(breeds[breed])
            breeds[breed].setAttribute("style","display:none;")
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
  });
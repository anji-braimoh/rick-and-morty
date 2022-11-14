const body = document.querySelector("body") //grabbing body tag

//fetching information from api and putting it into browser

async function fetchAPI(){
    //saving api response in constant and grabbing character by id
    // there are 826 characters in this api
    const response = await fetch('https://rickandmortyapi.com/api/character/1')
    //convert to json!!
    const data = await response.json()

    //getting data.name to populate on browser
    //creating new element
    const p = document.createElement("p")
    p.innerHTML=data.name
    //adding p tag to body
   body.appendChild(p)

}

fetchAPI()


// const body = document.querySelector("body") //grabbing body tag

//const { CANTOPEN } = require("sqlite3")

// //fetching information from api and putting it into browser

// async function fetchAPI(){
//     //saving api response in constant and grabbing character by id
//     // there are 826 characters in this api
//     const response = await fetch('https://rickandmortyapi.com/api/character/1')
//     //convert to json!!
//     const data = await response.json()

//     //getting data.name to populate on browser
//     //creating new element
//     const p = document.createElement("p")
//     p.innerHTML=data.episode[0].name
//     //adding p tag to body
//    body.appendChild(p)

// }

// fetchAPI()


//search form 

const searchForm = document.querySelector('.app-header-search')
let searchList = document.getElementById('search-list')

let activeTab = 1,allData

const getInputValue = (event) => {
    event.preventDefault()
    let searchText = searchForm.search.value
    console.log(searchText)
}

searchForm.addEventListener('submit', getInputValue)

// const fetchCharacters = async(searchText) => {
//     try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}`)
//         allData = await response.json
//         if(allData.response==='success'){
//             console.log(allData)
//         }
//     } catch (error){
//         console.log(error)
//     }
// } 


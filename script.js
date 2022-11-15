// const body = document.querySelector("body") //grabbing body tag

// const { json } = require("sequelize")

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
   fetchCharacters(searchText)
}

searchForm.addEventListener('submit', getInputValue)

const fetchCharacters = async(searchText) => {
    let url = `https://rickandmortyapi.com/api/character/?name=${searchText}`
    try{
        const response = await fetch (url)
        allData = await response.json()
        //  console.log(allData.response)
        if (allData !== null){
             //console.log(allData.results)
            showSearchList(allData.results)
        }
    }catch( error ){
        console.log(error)
    }
    }

    const showSearchList = (data) => {
        searchList.innerHTML = ""
        data.forEach(dataItem => {
            
            const divElem = document.createElement('div')
            divElem.classList.add('search-list-item')
            divElem.innerHTML= `
            <img src = "${dataItem.image ? dataItem.image : ""}"
        alt="">
            <p data-id = "${dataItem.id}">${dataItem.name}</p>
            `
            searchList.appendChild(divElem)
        })
        
    }

    searchForm.search.addEventListener('keyup',() => {
        if(searchForm.search.value.length>1){
            fetchCharacters(searchForm.search.value)
        } else{
            searchList.innerHTML = ""
        }
        })



        searchList.addEventListener('click', async (event) => {
            let searchId = event.target.dataset.id;
            let url = `https://rickandmortyapi.com/api/character/${searchId}`
    try{
        const respons = await fetch (url)
        data = await respons.json()
        //  console.log(allData.response)
        if (data !== null){
             //console.log(allData.results)
            console.log(data)
        }
    }catch( error ){
        console.log(error)
    }
    })
        
         
             
    
    
    // searchList.innerHTML = "";


// const showCharacter = (data) => {
//     console.log(data);
//     document.querySelector('.app-body-content-thumbnail').innerHTML = `
//         <img src = "${data[0].image.url}">
//     `;
// }


   //searchList.innerHTML = "")





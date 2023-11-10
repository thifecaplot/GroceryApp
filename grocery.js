let username = document.getElementById("username")
let form = document.querySelector("form")
let gInput = document.querySelector("#ginput")
let grocerylist = document.querySelector(".list-group")
let searchGrocery =document.querySelector("#searchg")
let clearBtn = document.querySelector("#clearbtn")


loadcontent()

function loadcontent() {
    document.addEventListener('DOMContentLoaded', getUsername)

    form.addEventListener('submit', addGrocery)

    grocerylist.addEventListener('click', removeGrocery)

    clearBtn.addEventListener('click', clearGrocery)

    searchGrocery.addEventListener('keyup', filterGrocery)
}

function getUsername() {
    let usernameLs = localStorage.getItem('username')
    if(!usernameLs){
        location.href = 'index.html'
    }

    username.innerText = usernameLs
    GetvalueFromLs()
}




// get value from ls
function GetvalueFromLs(){
    let grocery 
    if(localStorage.getItem("GroceryLs") == null){
        grocery = []
    }else{
        grocery = JSON.parse(localStorage.getItem("GroceryLs"))


    }
    grocery.forEach((gros) => {
        console.log(gros)
        let li = document.createElement('li')
        li.className="list-group-item"
        
        let liText = document.createTextNode(gros)

        li.appendChild(liText)

        


        grocerylist.appendChild(li)

        let link = document.createElement('a')
        link.className='delete-item'
        link.style.cursor = 'pointer'
        link.style.marginLeft = '95%'
        link.innerHTML = '<i class = "fas-solid fa-xmark"></i>'
    
        li.appendChild(link)
    
    }
    )
}

function addGrocery(e){
    if(gInput.value == ''){
    alert('enter grocery value')
    }else{
        let li = document.createElement('li')
        li.className="list-group-item"
        
        let liText = document.createTextNode(gInput.value)

        li.appendChild(liText)

        addGroceryLs(ginput.value)


        grocerylist.appendChild(li)

        let link = document.createElement('a')
        link.className='delete-item'
        link.style.cursor = 'pointer'
        link.style.marginLeft = '95%'
        link.innerHTML = '<i class = "fas-solid fa-xmark"></i>'
    
        li.appendChild(link)
    
        gInput.value = ''
    }
    e.preventDefault()
   
}


// store to localStorage

function  addGroceryLs(groceriesin){
    let grocery 
    if(localStorage.getItem("GroceryLs") == null){
        grocery = []
    }else{
        grocery = JSON.parse(localStorage.getItem("GroceryLs"))



    }
    grocery.push(groceriesin)
    localStorage.setItem("GroceryLs", JSON.stringify(grocery))
}
function removeGrocery(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure you want to delete grocery list')){
            e.target.parentElement.parentElement.remove()
            removeGroceryFromLs(e.target.parentElement.parentElement)
        }
    }
    e.preventDefault()
}
function removeGroceryFromLs(groceriesout){
    let grocery 
    if(localStorage.getItem("GroceryLs") == null){
        grocery = []
    }else{
        grocery = JSON.parse(localStorage.getItem("GroceryLs"))



        // loop througth the ls 
      grocery.forEach((grosls, index) => {
        if(groceriesout.textContent == grosls){
            grocery.splice(index, 1)
        }
      }
      )
    
    }
    //set ls value again
    localStorage.setItem("GroceryLs", JSON.stringify(grocery))
}
function clearGrocery(){
    grocerylist.innerHTML = ''
    clearFromLs()
}
function clearFromLs(){
    localStorage.removeItem
    ("GroceryLs")
}
function filterGrocery(e){
    let search = e.target.value.toLowerCase()
    let listgrocery = document.querySelector('.list-group-item')

    listgrocery.forEach((grocery) => {

        const groceryContent = grocery.firstChild.textContent
        if (groceryContent.toLowerCase().indexOf(search) != -1) {
            grocery.style.display = 'block'
        }else{
            grocery.style.display = 'none'
        }
    }
    )
    e.preventDefault()
}

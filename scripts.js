const purchasedItem = document.querySelector("form input")
const form = document.querySelector("form")
const itemList = document.querySelector("ul")

const notification = document.getElementById("notification")



purchasedItem.oninput = () =>{
    const value = purchasedItem.value.replace(/[0-9]/g, "")
    purchasedItem.value = value

}


form.onsubmit = (event) =>{
    event.preventDefault()
    addItem()
}


function addItem(){

    if (purchasedItem.value.trim() === "") {
        return;
    }

const newItem = document.createElement("li")
newItem.classList.add("list-item")

const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")

const itemInfo = document.createElement("label")
itemInfo.textContent = purchasedItem.value

const iconRemove = document.createElement("img")
iconRemove.classList.add("delete-button")
iconRemove.setAttribute("src", "img/delete-02-stroke-rounded.svg")

newItem.append(checkbox,itemInfo, iconRemove)
itemList.append(newItem)

purchasedItem.value = ""
}

function removedNotification(){
    notification.innerHTML = ""
    const icon = document.createElement("img")
    icon.setAttribute("src", "img/alert-circle-stroke-rounded.svg")

    const message = document.createElement("p")
    message.textContent = "O item foi removido da lista."

    const iconRemove = document.createElement("img")
    iconRemove.setAttribute("id", "close-toast")
    iconRemove.setAttribute("src", "img/cancel-01-stroke-rounded.svg")
    

    notification.append(icon,message,iconRemove)
     

}
  
    
itemList.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-button")){
        const item = event.target.closest(".list-item")

        item.remove()

        removedNotification()

        notification.classList.remove("hidden")

        setTimeout(() => {
            notification.classList.add("hidden")
        }, 2000) 
    }

    else if (event.target.getAttribute("type") === "checkbox") {
        
        const item = event.target.closest(".list-item");
        
        item.classList.toggle("completed");
    }

})


notification.addEventListener("click", (event) =>{
    if(event.target.id === "close-toast"){
        notification.classList.add("hidden")
    }
})








let todoItemsContainer = document.getElementById("firstContainer")
let newOpen = document.getElementById("assign")





function createAppendTodo(){
    if (newOpen.value === ""){
        return;
    }

    let item = document.createElement("li")
    item.classList.add("d-flex", "flex-row", "todoContainer")
    todoItemsContainer.appendChild(item)


    let listItems = document.createElement("input")
    listItems.type = "checkbox"
    listItems.id = "checkbox"+ Date.now()
    listItems.classList.add("inputChecklist")
    item.appendChild(listItems)

    let containermeth = document.createElement("div")
    containermeth.classList.add("containerOfList","d-flex", "flex-row") 
    item.appendChild(containermeth)

    let labelElement = document.createElement("label")
    labelElement.setAttribute("for", listItems.id)
    labelElement.textContent= newOpen.value
    labelElement.classList.add("singleElement")
    containermeth.appendChild(labelElement)

    let delIconContainer = document.createElement("div")
    delIconContainer.classList.add("del-icon-container")
    containermeth.appendChild(delIconContainer)

    let delicon = document.createElement("i")
    delicon.classList.add("fa-regular", "fa-trash-can","idel")
    delIconContainer.appendChild(delicon)

    delicon.onclick=function(){
        todoItemsContainer.removeChild(item)
    }
    newOpen.value == "";

}



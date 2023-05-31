let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === "") {
        alert("You Have To Enter A Task")
    } else {
        let li = document.createElement('li');
        listContainer.appendChild(li);
        li.innerHTML = inputBox.value
        let span = document.createElement('span')
        span.innerHTML = "&#10060"
        li.appendChild(span)

    }
    inputBox.value = ""
    saveData()
}
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.add("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}


function retData() {
    listContainer.innerHTML = localStorage.getItem("data")
}
retData()
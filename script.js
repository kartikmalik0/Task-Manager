let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === "") {
        alert("You")
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



// const inputBox = document.getElementById("input-box")
// const listContainer = document.getElementById('list-container')

//   function addTask() {
//     if (inputBox.value === "") {
//         alert("You must write something!")

//     } else {
//         let li = document.createElement("li")
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li);
//         let span = document.createElement('span');
//         span.innerHTML = "&#10060;"
//         li.appendChild(span)
//     }
//     inputBox.value = ""
//     saveData()
// }
// listContainer.addEventListener('click', function(e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle('checked')
//         saveData()
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove()
//         saveData()
//     }
// }, false)

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function loadData() {
//     listContainer.innerHTML = localStorage.getItem("data")
// }
// loadData()


// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//     if (inputBox.value === "") {
//         alert("You must write something!");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         inputBox.value = ""; // Clear the input box after adding the task
//     }
// }
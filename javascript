const inputBox = document.getElementById("todoText");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == "") {
        alert("You should write something.");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete");
        li.appendChild(deleteButton);

        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'BUTTON') {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            saveData();
        }
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();

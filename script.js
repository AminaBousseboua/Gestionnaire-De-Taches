const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fonction pour ajouter une tâche
function addTask() {
    if(inputBox.value === ''){
        alert("Vous devez écrire quelque chose !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Créer le bouton supprimer (la croix)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Code pour le symbole 'x'
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Sauvegarder après ajout
}

// Gérer le clic sur la liste (cocher ou supprimer)
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Permettre d'ajouter avec la touche "Entrée"
inputBox.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Sauvegarder dans le navigateur
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Charger les données au démarrage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
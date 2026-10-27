/**
 * the id
 */
const input = document.getElementById("input");
const btn = document.getElementById("button");
const listTaches = document.getElementById("listesTaches");

/**
 * the funtions 
 */
const action = function(){
    const div = document.createElement("div"); //cree un elt div
    div.className = "tache"

    const texteInput = input.value; // recup le texte saisie dans l'input
    div.textContent = texteInput; // copie ce texte dans la balise div 
    input.value = ""; // efface le contenue de l'input 

    const box = document.createElement("input") // cree un elt input 
    box.type = "checkbox"; // sont type

    const buttonSup = document.createElement("button"); // cree un elt buttonSup
    buttonSup.textContent = "🗑️";

    buttonSup.addEventListener("click", function(){
        div.remove();
    }) // supprime labalise div 

    div.appendChild(box);
    div.appendChild(buttonSup);
    listTaches.appendChild(div);

}

/**
 * the eventListner
 */
const eventListner = function(){
    btn.addEventListener("click", action);
}

eventListner();
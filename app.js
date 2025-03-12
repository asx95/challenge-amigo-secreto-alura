let amigos = [];
const regex = /^[A-Za-z]+$/

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); 

    if(regex.test(nome)) {
        nome = nome[0].toUpperCase() + nome.substring(1); 
        amigos.push(nome);
        listarAmigos(); 
        input.value = ""; 
    }
    else {
        alert("Digite somente letras (A-Z) no campo");
    }
};

function listarAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");  
        li.textContent = `${index + 1}. ${amigo}`;  
        lista.appendChild(li);
    });
}; 

function sortearAmigo() {
    let sortear = Math.floor(Math.random() * amigos.length);
    let amigoEscolhido = amigos[sortear];
    alert("Amigo escolhido: " + amigoEscolhido);
}; 
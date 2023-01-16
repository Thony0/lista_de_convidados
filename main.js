var listaDeConvidados=[];
function enviar(){
    var nome=document.getElementById("nome").value;
 listaDeConvidados.push(nome);
 document.getElementById("mostrarNome").innerHTML=listaDeConvidados;
}
function mostrar(){
    var nomes=listaDeConvidados.join("<br>");
    document.getElementById("mostrar-lista").innerHTML=nomes;
}
function organizar_lista(){
    listaDeConvidados.sort();
    var nomes=listaDeConvidados.join("<br>");
    document.getElementById("organizador").innerHTML=nomes;
}
function pesquisar(){
    var nomePesquisado=document.getElementById("nomePesquisado").value;
    var encontrado=0;
    for (var indice = 0; indice < listaDeConvidados.length; indice++) {
        if (nomePesquisado == listaDeConvidados[indice]) {
             encontrado = encontrado + 1;
        }
 document.getElementById("pesquisado").innerHTML = "Nome encontrado " + encontrado + " vez(es)";
 }
}

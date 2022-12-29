var frutaImg=[
    "https://tse4.mm.bing.net/th?id=OIP.XvZxjh64I6ZNuLHzLVhOIAHaFc&pid=Api&P=0", 
    "https://tse2.mm.bing.net/th?id=OIP.TdPB1CIxHwPV3mMLcKdxxQHaEe&pid=Api&P=0", 
    "https://tse3.mm.bing.net/th?id=OIP.IpIxta5nwKl31Rk40ifEWQHaEK&pid=Api&P=0", 
    "https://tse4.mm.bing.net/th?id=OIP.qLrQT8h-AiIwvbG-mACYsgHaFe&pid=Api&P=0", 
    "https://tse2.explicit.bing.net/th?id=OIP.8NeRWtWEW8NNUB_M_pARUgHaFj&pid=Api&P=0", 
    ];
    var frutasNomes=[
    "frutas", "maçã", "banana", "manga", "mamão", 
    ];
var i=0;
function update()
{
    i++;
    var numerosDasFrutasNoArray=4;
    if(i > numerosDasFrutasNoArray )
{
    i=0;
}

var atualizarImagem=frutaImg[i];
var atualizarNome=frutasNomes[i];
document.getElementById("frutasImagem").src=atualizarImagem;
document.getElementById("frutasNome").innerHTML=atualizarNome;

}


//faz o botão modo noturno mudar o fundo do site

var fundoescuro = document.getElementById('corpo')

function clicar(){
    fundoescuro.style.background = "black"
    fundoescuro.style.color = "white"
    
}

//faz o botão modo diurno mudar o fundo do site

var fundoclaro = document.getElementById("corpo")

function claro(){
    fundoclaro.style.background = "white"
    fundoclaro.style.color = "black"
}

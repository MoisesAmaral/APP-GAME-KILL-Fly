//DESENVOLVIMENTO O APP - GAMER MATA MOSQUITO - CURSO DE JAVA SCRIPT COM "JORGE SANTANA" UDEMY.

//Variaveis Globais
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criarMosquitoTempo = 1500
//variavel para capturar parametros de dificuldade do jogo
var nivel = window.location.search
nivel = nivel.replace('?', '')



// Condicionais para aplicar o grau  de dificuldade escolhido pelo usuário
if(nivel === 'normal'){
//1500 1.5 segundos
criarMosquitoTempo = 1500
}else if( nivel ==='dificil'){
//1000 1 segundo
criarMosquitoTempo = 1000
}else if(nivel ==='hard'){
//750 0.5 segundos
criarMosquitoTempo = 750

}


// função para ajusta o tamanho do palco do jogo, ou seja onde os Mosquitos vão ser rendereizados
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()



//função de tempo para o cronometro do jogo
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }  
}, 1000)



//função para criar o elemento no body da página de forma randomica (aleatoria)
function posicaoRandomica(){
    
// Remover Mosquito anterior (caso exista)
if(document.getElementById('mosquito') ){
    document.getElementById('mosquito').remove()
    //Controele de vidas
    if(vidas > 3) {        
        window.location.href = 'fim_de_jogo.html'
    }  else{
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
    vidas++
    }
}


// cria as posiçoes de elementos de forma randomica aleatoria, respeitando as dimensoes do navegador
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90


//logica para não desaparecer da tela
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY


// criar elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()  // chamada da função, ela retorna a classe aleatoria definida abaixo na função tamanhoAleatorio()  +  ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}
document.body.appendChild(mosquito)
}



//Função para gerar tamanhos aleatorios
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'        
         case 1:
             return 'mosquito2'          
         case 2:
             return 'mosquito3'        
    }
}

// Função para os mosquitos aparecer de forma aleatoria com os lados modificado, ou seja cada hora uma img aparece virada.
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'        
         case 1:
             return 'ladoB'          
}
}





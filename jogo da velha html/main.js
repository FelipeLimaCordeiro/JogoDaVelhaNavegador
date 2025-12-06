var title = document.getElementById("title");
var vezDeJogar = 1;
var vitoriasJogador1 = 0;
var vitoriasJogador2 = 0;
var cont = 0;
var cards = []
var gameEnd = false;
var mapCardsActive = {
    0 : null,
    1 : null,
    2 : null,
    3 : null,
    4 : null,
    5 : null,
    6 : null,
    7 : null,
    8 : null
}
const setWins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function clickCard(numberCard){

    if(gameEnd){
        return
    }

    let timeCard = document.getElementById("card"+String(numberCard));
    if( timeCard.innerHTML == "" ){
        title.innerHTML = "Jogo da Velha";
        htmlTime = "";
        if( vezDeJogar == 1 ){
            htmlTime = '<div id = "sp1"> </div> <div id = "sp2"> </div>';
            mapCardsActive[numberCard] = vezDeJogar;
            vezDeJogar = 0;
        }else{
            htmlTime = '<div id = "sp3"> </div>';
            mapCardsActive[numberCard] = vezDeJogar;
            vezDeJogar = 1;
        }
        timeCard.innerHTML = htmlTime; 
        cont++;
    }else{
        title.innerHTML = "Escolha outra opção";
        return
    }

    for(let i = 0; i < setWins.length; i++){
        for( let l = 0; l <= 1; l++){
            if( mapCardsActive[setWins[i][0]] == l && mapCardsActive[setWins[i][1]] == l && mapCardsActive[setWins[i][2]] == l ){
                if(l == 1){
                    vitoriasJogador1++;
                    document.getElementById("jogador1").innerHTML = "Vitorias Jogador X : "+String(vitoriasJogador1);
                    
                }else{
                    vitoriasJogador2++;
                    document.getElementById("jogador2").innerHTML = "Vitorias Jogador O : "+String(vitoriasJogador2);
                    
                }
                gameEnd = true;
                document.getElementById("container").innerHTML += '<div id="btnRestart">jogar novamente</div>';
                document.getElementById("btnRestart").addEventListener('click', newGame );
                return
            }
        }
    }
    
    if(cont == 9){
        gameEnd = true;
        document.getElementById("container").innerHTML += '<div id="btnRestart">jogar novamente</div>';
        document.getElementById("btnRestart").addEventListener('click', newGame );
        return
    }

};

function newGame(){
    let divGame = document.getElementById("game");
    if(gameEnd) document.getElementById("btnRestart").remove();
    divGame.innerHTML = "";
    gameEnd = false;
    vezDeJogar = 1;
    cont=0;
    mapCardsActive = {
        0 : null,
        1 : null,
        2 : null,
        3 : null,
        4 : null,
        5 : null,
        6 : null,
        7 : null,
        8 : null
    }
    
    for(let i = 0 ; i < 9; i++ ){
        divGame.innerHTML += '<div id = "card'+String(i)+'" class = "cardGame"></div>';
    };
    for(let i = 0 ; i < 9; i++ ){
        cards.push( document.getElementById("card"+String(i)).addEventListener('click', ()=>{ clickCard(i) }) )
    };
};

newGame();
window.onload = function(){
    //EXECUTA UM JS IMEDIATAMENTE APÓS O CARREGAMENTO DA PÁGINA
    var seconds = 00;
    var milliseconds = 00;
    
    var addendSeconds = document.getElementById('seconds');
    var addendMilliseconds = document.querySelector('span#milliseconds'); 

    var buttonStart = document.getElementById('btn_start');
    var buttonStop = document.getElementById('btn_stop');
    var buttonReset = document.getElementById('btn_reset');

    var interval; //
    buttonStart.onclick = function(){
        clearInterval(interval); //limpa o temporizador definido no método

        interval = setInterval(startTimer, 10); // o 10 está sendo definido como o valor máximo
    };
    buttonStop.onclick = function(){
        clearInterval(interval);
    
    };
    buttonReset.onclick = function(){
        clearInterval(interval);
        seconds = '00';
        milliseconds = '00';

        addendSeconds.innerHTML = seconds 

        addendMilliseconds.innerHTML = milliseconds 
    };
    function startTimer(){
        milliseconds++; // ++ para incrementar
        if (milliseconds <= 9){
            addendMilliseconds.innerHTML = '0' + milliseconds;
        };
        if (milliseconds > 9){
            addendMilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {

            console.log('seconds');
            seconds++;
            addendSeconds.innerHTML = '0' + seconds;

            milliseconds = 0;

            addendMilliseconds.innerHTML = '0' + 0;
        }
        if (seconds > 9){
            addendSeconds.innerHTML = seconds;
        }
    }


}
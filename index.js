

function mudarCorHexa(){
    var letras = '0123456789ABCDEF';
    var cor = '#';

    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
      }
      
      return cor;
}

function definirCorHexa(){
    back2.innerText ="Background Color: "+  mudarCorHexa();

    document.body.style.backgroundColor = mudarCorHexa();
}


function mudarCorSimples(){

    var cor="";

    var cores = [
        'green',
        'blue',
        'purple',
        'red',
        'yellow',
        'orange'];

        cor += cores[Math.floor(Math.random() * 6)];
        
        back1.innerText ="Background Color: "+  cor;
    
        document.body.style.backgroundColor = cor;
    
}



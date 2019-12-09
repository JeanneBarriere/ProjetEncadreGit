function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function handle_click(event,p4) {
  if(p4.turn==1){
 if (p4.winner !== (null)) {
    window.document.getElementById("newpart").style.display = "flex" ;
	return ;
  }
  let column = event.target.dataset.column;
  if (column !== undefined) {
    let row = play(column, p4);
    if (row === null) {
      window.alert("La colonne est pleine!");
    } else {
      if (win(row, column, p4.turn, p4)) {
        p4.winner = p4.turn;
      }
      p4.turn = ((3) - p4.turn) ;
     render(p4);
     counter ++;
     showCounter(counter);
     var audio = new Audio('sound/jeton.mp3');
     audio.play();
     tabplein(p4);
      switch (p4.winner) {
        case 1:
        var resultElem = document.getElementById("win");
        resultElem.textContent = "Victoire du premier joueur";
        var victoire = new Audio('sound/victoire.mp3');
        victoire.play();
          break;
        case 2:
          var resultElem = document.getElementById("win");
          resultElem.textContent = "Victoire du second joueur";
          var victoire = new Audio('sound/victoire.mp3');
          victoire.play();
          break;
        case 10:
          var resultElem = document.getElementById("win");
          resultElem.textContent = "Partie nulle";
          var victoire = new Audio('sound/nulle.mp3');
          victoire.play();
	         break;
         }
       }

     }
     setTimeout(IA, 500);
   }
       }

function IA(Puissance4){
  let column = getRandomInt(cols);
  let row = play(column, p4);
  if (row === null) {
    column = getRandomInt(cols);
  } else {
    if (win(row, column, p4.turn, p4)) {
      p4.winner = p4.turn;
    }
    p4.turn = ((3) - p4.turn) ;
    render(p4);
    counter ++;
    showCounter(counter);
    var audio = new Audio('sound/jeton.mp3');
    audio.play();
    tabplein(p4);
    switch (p4.winner) {
      case 1:
      var resultElem = document.getElementById("win");
      resultElem.textContent = "Victoire du premier joueur";
      var victoire = new Audio('sound/victoire.mp3');
      victoire.play();
      break;
      case 2:
      var resultElem = document.getElementById("win");
      resultElem.textContent = "Victoire du second joueur";
      var victoire = new Audio('sound/victoire.mp3');
      victoire.play();
      break;
      case 10:
      var resultElem = document.getElementById("win");
      resultElem.textContent = "Partie nulle";
      var victoire = new Audio('sound/nulle.mp3');
      victoire.play();
      break;
    }
  }
}
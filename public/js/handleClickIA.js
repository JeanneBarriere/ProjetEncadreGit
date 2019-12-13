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
    let row = play(parseInt(column), p4);
    if (row === null) {
      window.alert("La colonne est pleine!");
    } else {
      if (win(row, parseInt(column), p4.turn, p4)) {
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
          resultElem.textContent = "Victoire de l'ordinateur";
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

       setTimeout(IA, 500);
     }
   }
       }

function IA(Puissance4){
  if(p4.winner==(null)){
  if(p4.turn==2){
  let column = null;
  let row = null;
  for(var i =0; i<p4.cols; i++){
    let p4IA = new Puissance4IA(p4);
    p4IA.turn = 2;
    let columnIA = i;
    let rowIA = play(parseInt(columnIA), p4IA);
    if(rowIA == null) continue;
    if (winIA(parseInt(rowIA), parseInt(columnIA), 2, p4IA, 4)){
      alert('win');
      column = columnIA;
      row = rowIA;
      break;
    }
  }

  if(column == null && row ==null){
    for(var i =0; i<p4.cols; i++){

      let p4IA = new Puissance4IA(p4);
      p4IA.turn = 1;
      let columnIA = parseInt(i);
      let rowIA = play(parseInt(columnIA), p4IA);
      if(rowIA == null) continue;
      if (winIA(parseInt(rowIA), parseInt(columnIA), 1, p4IA, 4)){
        alert('lost');
        column = columnIA;
        row = rowIA;
        break;
      }
    }
  }

 if(column == null && row ==null){
   column = getRandomInt(cols);
   row = play(column, p4);
   while (row === null) {
    column = getRandomInt(cols);
    row = play(column, p4);
  }
  } else {
    play(column, p4);
  }
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
      resultElem.textContent = "Victoire de l'ordinateur";
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
}

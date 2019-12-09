  function render(p4) {
    let table = document.createElement('table');
    for (let i = p4.rows - 1; i >= 0; i--) {
      let tr = table.appendChild(document.createElement('tr'));
      for (let j = 0; j < p4.cols; j++) {
        let td = tr.appendChild(document.createElement('td'));
         let colour = p4.board[i][j] ;
         switch (colour) {
           case 1:td.className = 'player' +1+ j1color;
             break;
           case 2:td.className = 'player' +2+ j2color;
             break;
           case 3:td.className = 'player' +3;
             break;
           case 4:td.className = 'player' +4;
             break;
           case 5:td.className = 'player' +5;
             break;
           case 6:td.className = 'player' +6;
             break;

         }
        td.dataset.column = j;
         }
        }    p4.element.innerHTML = '';
         p4.element.appendChild(table);
       }

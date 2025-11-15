const tablue=document.getElementById('table')


let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", "",""]; 
let win = [
       [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
     [0,4,8],[2,4,6]
];
tablue.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;  
    let index = e.target.id;           
    if (board[index] !== "") return;   
    

    board[index] = currentPlayer;
    e.target.innerText = currentPlayer;
    e.target.disabled = true;
    checkWin();    
    currentPlayer = currentPlayer === "X" ? "O" : "X"; 
                       
    
});
let msg=document.getElementById('MSG')
let tmp;//virtual variable for wining




// check 
function checkWin() {
    for (let combo of win) {
        const [a, b, c] = combo;
        tmp=combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
           combo.forEach(i => {
        document.getElementById(i).style.border = "4px solid green";
         });
            
            document.querySelectorAll('#table button').forEach(btn => btn.disabled = true);
            
             msg.innerText=(board[a] + " wins bravo")
            
            return;
        } 
    }
     if (!board.includes(""))
         return msg.innerText="Draw";
        
    
    

}




//button remove
function remove() {
 
   msg.innerText='';
    board = ["", "", "", "", "", "", "", "", ""];

   
    document.querySelectorAll('#table button').forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
    tmp.forEach(i => {
        document.getElementById(i).style.border = "none";
         });

    
    currentPlayer=== "X" ? "O" : "X";;
};




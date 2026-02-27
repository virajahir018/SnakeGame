let board = document.querySelector('.board');
const rows = 30;
const cols = 20;

for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
        const box = document.createElement('div');
        box.classList.add('box');
        board.appendChild(box);
    }
        
}
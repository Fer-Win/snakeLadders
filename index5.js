import {data} from './newFile3.js'
var canvas = document.getElementById('myCanvas');
var Player1 = document.getElementById('player1');
var Player2 = document.getElementById('player2');
var start = document.getElementById('start');
var dice = document.getElementById('diceroll');
var rolledDice = document.getElementById('rolledDice');
// canvas.width = window.innerWidth/2;
//  canvas.height = window.innerHeight/2;
// console.log(data); 
let diceRoll = true;

class Player{

    constructor(name){
        this.name = name;
        this.position = 0;
    }
    // move(){
    //     let dice = Math.floor(Math.random() * 6) + 1;
    //     this.position = this.position + dice;
    //     console.log(this.name + ' rolled a ' + dice + ' and is now at position ' + this.position);
    // }

}
let gameStarted = false;
var c = canvas.getContext('2d');
data.map((item, index) => {
  // console.log(item);
 // if(item.id %2 ==0){
 //   c.fillStyle = 'rgba(255,255,255,0.5)';
//  }else{
//     c.fillStyle = 'rgba(0,0,0,0.5)';
//  }
c.fillStyle = 'rgba(255,255,255,0.5)';
   c.fillRect(item.x, item.y, 80, 80);
   c.strokeStyle="rgba(0,0,0,1)";
   c.strokeRect(item.x, item.y, 80, 80);
  
c.font = '16px Poppins';
if(item.snakeAndLadders){
c.fillStyle = 'red';
if(item.snakeAndLadders > item.id){
     c.fillText(`L ${item.snakeAndLadders}`,item.x+35, item.y +45,45);
}else{
     c.fillText(`S ${item.snakeAndLadders}`,item.x+35, item.y +45,45);
  }
}else{
    c.fillStyle = 'black';
    c.fillText(`${item.id}`,item.x+32, item.y +45,45);
//   }
}
})
const player1  = new Player("Player 1");
console.log(player1);
const player2  = new Player("Player 2");
console.log(player2);
    

start.addEventListener('click', () => {
   
   if(!gameStarted){
      gameStarted = true;
      var text = document.createElement('div');
      text.innerHTML = 'Game Started';
      document.body.appendChild(text);
      start.style.display = 'none';
      Player1.innerHTML = `Player 1 Postition: ${player1.position}`;
      Player2.innerHTML = `Player 2 Postition: ${player2.position}`;
}
    dice.style.display = 'block';
    dice.addEventListener('click', rolltheDice)
})

function checkWinner(){
  if(player1.position ==100){
    alert('Player 1 won');
    

}
if(player2.position ==100){
    alert('Player 2 won');
}
}

function rolltheDice(){
    
    let dice = Math.floor(Math.random() * 6) + 1;
    rolledDice.innerHTML = `Dice Rolled: ${dice}`;
    console.log(dice);
    if(diceRoll){
        if(player1.position + dice <= 100){
          player1.position = player1.position + dice;
        }
        checkSnakeAndLadder(player1.position,player1);
        Player1.innerHTML = `Player 1 Postition: ${player1.position}`;
      }else{
        if(player2.position + dice <= 100){
          player2.position = player2.position + dice;
        }
        checkSnakeAndLadder(player2.position,player2);
        Player2.innerHTML = `Player 2 Postition: ${player2.position}`;
      }
    diceRoll = !diceRoll;
  
    checkWinner();
    // this.position = this.position + dice;
    // console.log(this.name + ' rolled a ' + dice + ' and is now at position ' + this.position);
}


function checkSnakeAndLadder(position,player){
    data.map((item, index) => {
        if(item.id == position){
            if(item.snakeAndLadders && item.snakeAndLadders > item.id){
                player.position = item.snakeAndLadders;
                console.log(player.name + ' got a ladder and is now at position ' + player.position);
            }else{
          if(item.snakeAndLadders){

                player.position = item.snakeAndLadders;
                console.log(player.name + ' got a snake and is now at position ' + player.position);
            }
        
            }
        }
    }
)

}

   
c.beginPath();
c.arc(100, 75, 30, 0, 2 * Math.PI);
c.fill()
c.stroke();
   
   
//    // Assuming you have a canvas context 'c' and a circle with initial position (100, 75)
// var x = 100;
// var y = 75;
// var radius = 30;
// var dx = 2; // Change in x (speed in the x direction)
// var dy = 2; // Change in y (speed in the y direction)

// function animateCircle() {
//     requestAnimationFrame(animateCircle);

//     // Update the circle's position based on some condition
//     x =x+2*dx;
//     y =y+ 2*dy;

//     // Check conditions for bouncing off walls or other interactions
//     // For example, bouncing off the walls:
//     if (x + radius > canvas.width || x - radius < 0) {
//         dx = -dx; // Reverse the direction in the x-axis
//     }

//     if (y + radius > canvas.height || y - radius < 0) {
//         dy = -dy; // Reverse the direction in the y-axis
//     }

//     // Clear the canvas
//     c.clearRect(0, 0, canvas.width, canvas.height);

//     //Draw the updated circle
//     c.beginPath();
//      c.arc(x, y, radius, 0, 2 * Math.PI);
//      c.fill();
//     c.stroke();
// }

// // Call the animate function to start the animation loop
// animateCircle();

 // var c = canvas.getContext('2d');
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(0,0,80,80);
//  c.fillRect(0,80,80,80);
//   c.fillStyle = 'black';
//   c.font = '16px Arial';
//   c.fillText('1', 80/2, 40);
//   c.fillText('2', 35, 125); 
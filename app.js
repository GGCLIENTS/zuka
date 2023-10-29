const canvas = document.getElementById("gameCanvas")
const h = document.getElementsByTagName("h1")[0]
const ctx = canvas.getContext("2d");
let gridSize = 20;
let snakeColor = "white"
let foodColor = "Brown"
let headColor= "white"
let snake = [{x:10, y:10}];
let food = {x:15, y :15};
let dx = 1;
let dy = 0;

function drawFood(){
    ctx.fillStyle=foodColor
    ctx.fillRect(food.x*gridSize,food.y*gridSize,gridSize,gridSize)
}
function check(){
    
}
let i = 0
function update(){
    const head = {x:snake[0].x+dx, y:snake[0].y+dy};
    // .unshift(), pop() --> massive
    snake.unshift(head) 
    if(head.x==food.x && head.y==food.y){ 
        i++
        food.x=Math.floor(Math.random()*(canvas.width/gridSize))
        food.y=Math.floor(Math.random()*(canvas.height/gridSize))    
        h.innerText = "Points: " + i   
    }else{
        snake.pop();
    }if(head.x== canvas.width/gridSize ||  head.y== canvas.height/gridSize || head.y== canvas.height/gridSize || head.y == -1 || head.x == -1){
        window.location.reload();
        alert("You Lost")
    }if(head.x== snake.width/gridSize ||  head.y== snake.height/gridSize || head.y== canvas.snake/gridSize){
        window.location.reload();
        alert("You Lost")
    }
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawSnake();
    drawFood();
}
function drawSnake(){
    snake.forEach(segment=>{
        ctx.fillStyle=headColor;
        ctx.fillRect(segment.x*gridSize,segment.y*gridSize,gridSize,gridSize)
    })
}
const gameLoop = setInterval(update,500);
document.addEventListener("keydown",(event)=>{

    switch(event.key ){
        case "ArrowUp" || "w":
            if(dy!==1){
                dx=0;
                dy=-1;
                console.log(dy)
            }
            break;
        case "ArrowDown" || "s":
            if(dy!==-1){
                dx=0;
                dy=1;
            }
            break;
        case "ArrowRight" || "d":
            if(dx!=-1){
                dx=1;
                dy=0;
            }
            break;
        case "ArrowLeft" || "a":
            if(dx!==1){
                dx=-1;
                dy=0;
            }
            break;
    }
})

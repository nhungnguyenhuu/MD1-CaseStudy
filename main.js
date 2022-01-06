function docReady() {
    window.addEventListener("keydown", movePlayer);
}

function movePlayer(evt) {
    girl.draw(ctx);
    switch (evt.keyCode) {

        case 37:
            if (girl.x > 10) {
                girl.moveLeft();
            }
            break;
        case 39:
            if (girl.x < 1125) {
                girl.moveRight()
            }
            break;
        case 40:
            if (girl.y > 550) {
                break;
            } else {
                girl.moveDown()
            }
            break;
        case 38:
            if (girl.y > 0) {
                girl.moveUp()
            }
            break;
    }

}

function creatApple(x_Apple,y_Apple) {
    timer1++
    if(timer1 > spawnApple){
        let x = randomNumber(x_Apple, x_Apple+200)
        let y = randomNumber(y_Apple-50,y_Apple)
        let apple = new Apple(x,y,"image/case-quaTaoCat.png");
        apples.push(apple);
        timer1 = 0;
    }
}
function moveAllApple() {
    for (let i = 0; i < apples.length; i++) {
        apples[i].dropDown();
    }
}
function displayAllApple() {
    for (let i = 0; i < apples.length; i++) {
        apples[i].draw(ctx);
    }
}
function creatCaterpillar(x_Caterpillar,y_Caterpillar) {
    timer2++
    if(timer2 > spawnCaterpillar){
        let x = randomNumber(x_Caterpillar, x_Caterpillar+200)
        let y = randomNumber(y_Caterpillar-50,y_Caterpillar)
        let caterpillar = new Caterpillar(x, y,'image/case-Sau.png' );
        caterpillars.push(caterpillar);
        timer2 = 0;
    }
}

function displayAllCaterpillar() {
    for (let i = 0; i < caterpillars.length; i++) {
        caterpillars[i].draw(ctx);
    }
}

function moveAllCaterpillar() {
    for (let i = 0; i < caterpillars.length; i++) {
        caterpillars[i].dropDown()
    }
}
function checkCollision(girl,apple) {
    let  left1 = girl.x;
    let right1 = girl.x + 40;
    let top1 = girl.y;
    let bottom1 = girl.y + 100;

    let left2 = apple.x;
    let right2 = apple.x + apple.size;
    let top2 = apple.y;
    let bottom2 = apple.y + apple.size;
    if(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2){
        return false;
    }else {
        return true;
    }
}
function checkAllCollision() {
    for(let i = 0; i<apples.length; i++){
        if(checkCollision(girl,apples[i])){
            score+= apples[i].point;
            apples.splice(i,1);
            i--;
        }
    }
}
function disPlayUI() {
    document.getElementById("score").innerText = score;
    document.getElementById("high-score").innerText = highScore;
}
function saveHighScore() {
    if(score> highScore){
        saveData("highSore",score);
    }
}


function randomNumber(min, max) {
    let rand = Math.floor(Math.random()*(max-min)) + min;
    return rand;
}

function playMain() {
    girl.draw(ctx);
    checkAllCollision()
 let number=randomNumber(0,4)

    for (let i = 0; i <applePosition.length ; i ++) {
        let treeN = new Tree(applePosition[i], 200, 'image/case-cayTaoCat.png');
        treeN.draw(ctx);
    }
    creatApple(applePosition[number],250);
    moveAllApple();
    displayAllApple();
    disPlayUI();
    saveHighScore();
    creatCaterpillar(caterpillarPosition[number],260);
    moveAllCaterpillar();
    displayAllCaterpillar();

    requestAnimationFrame(playMain)
}


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")
let girl = new Girl(100, 550, "image/case-coBeCat.png");
let applePosition= [10,300,750,1050];
let caterpillarPosition= [15,365,755,1155];

// let bird = new Bird(550, 30, "image/case-chimCat.png");
let apples =[];
let caterpillars = [];
let highScore = loadData('highScore')
let spawnApple = 15;
let spawnCaterpillar = 30;
let timer1 = 0;
let timer2 = 2;
let score = 0;




playMain();



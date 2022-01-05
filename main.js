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

// function creatApple() {
//     timer++
//     if(timer > spawnApple){
//         let x = randomNumber(0, canvas.width)
//         let y = randomNumber(-2,-6)
//         let apple = new Apple(x,y);
//         apples.push(apple);
//         timer = 0;
//     }
// }
// function displayAllApple() {
//     for (let i = 0; i < apples.length; i++) {
//         apples[i].draw(ctx);
//     }
// }
// function moveAllApple() {
//     for (let i = 0; i < apples.length; i++) {
//         apples[i].dropDown();
//     }
// }
// // function randomNumber(min, max) {
//     let rand = Math.floor(Math.random()*(max-min)) + min;
//     return rand;
// }
function playMain() {
    girl.draw(ctx);
    bird.draw(ctx);
    for (let i = 10; i <1255 ; i +345) {
        let treeN = new Tree(i, 200, 'image/case-cayTaoCat.png');
        treeN.draw(ctx);
    }

    // creatApple();
    // moveAllApple();
    // displayAllApple();



    requestAnimationFrame(playMain)
}


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")
let girl = new Girl(100, 550, "image/case-coBe.png");
let tree = new Tree(10, 300, "image/case-cayTaoCat.png");
let bird = new Bird(550, 30, "image/case-chimCat.png");
let apples =[];
let spawnApple = 3;
let timer = 0;
girl.draw(ctx)
tree.draw(ctx);


playMain();



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
function play() {
    girl.draw(ctx);
    bird.draw(ctx);
    for(let i=10; i<1200; i+=345){
        let treeN = new Tree(i, 200, 'image/case-cayTaoCat.png');
        treeN.draw(ctx);
    }

    requestAnimationFrame(play)
}

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")
let girl = new Girl(100, 600, 'image/case-coBeCat.png');
let tree = new Tree(10, 300, 'image/case-cayTaoCat.png')
let bird = new Bird(550, 30,'image/case-chimCat.png');
bird.draw(ctx);
girl.draw(ctx);
tree.draw(ctx);
play();



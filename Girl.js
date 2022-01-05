class Girl {
    constructor(x, y, avt) {
        this.x = x;
        this.y = y;
        this.avt = avt;
        this.score = 0;
    }
    draw(ctx) {
        let a = this.x;
        let b = this.y;
        let img = new Image();
        ctx.beginPath();
        img.onload = function () {
            ctx.clearRect(0, 0, 1255, 700)
            ctx.drawImage(img, a, b, 100, 100)
        }
        img.src = this.avt;
        ctx.fill();
        ctx.closePath();
    }
    moveLeft(){
        this.x-= 30;
    }
    moveRight(){
        this.x+= 30;
    }
    moveUp(){
        this.y -=50;
    }
    moveDown(){
        this.y += 50;
    }
}
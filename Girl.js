class Girl {
    constructor(x, y,avt) {
        this.x = x;
        this.y = y;
        this.avt = avt;
        this.speed= 30;
    }
    draw(ctx) {
        let a = this.x;
        let b = this.y;
        let img = new Image();
        ctx.beginPath();
        img.onload = function () {
            ctx.clearRect(0, 0, 1255, 650)
            ctx.drawImage(img, a, b, 100, 100)
        }
        img.src = this.avt;
        ctx.fill();
        ctx.closePath();
    }
    moveLeft(){
        this.x-= this.speed;
    }
    moveRight(){
        this.x+= this.speed;
    }
    moveUp(){
        this.y -=this.speed;
    }
    moveDown(){
        this.y += this.speed;
    }
}
class Apple {
    constructor(x, y, avt) {
        this.x = x;
        this.y = y;
        this.avt = avt;
        this.speed = 5;
    }

    draw(ctx) {
        let a = this.x;
        let b = this.y;
        let img = new Image();
        ctx.beginPath();
        img.onload = function () {
            ctx.drawImage(img, a, b, 20, 20);
        }
        img.src = this.avt;
        ctx.fill();
        ctx.closePath();
    }
    move(){
        if(this.y<canvas.height){
            this.y +=  this.speed;
        }else{
            this.y = apple.y;
        }
        this.checkImpact()

    }
    checkImpact(){
        if(this.y = girl.y && this.x>=girl.x && this.x>=girl.x+ girl.avt.length){
            girl.score++
        }
    }
    dropApple(ctx){
        this.draw(ctx);
        this.move()
    }
}
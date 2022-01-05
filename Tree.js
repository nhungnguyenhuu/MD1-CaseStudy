class Tree {
    constructor(x, y,avt) {
        this.x= x;
        this.y = y;
        this.avt = avt;
        this.size = 200;
    }
    draw(ctx){
        let a = this.x;
        let b = this.y;
        let img = new Image();
        ctx.beginPath();
        img.onload = function (){
            ctx.drawImage(img, a, b, this.size, this.size);

        }
        img.src = this.avt;
        ctx.fill();
        ctx.closePath();

    }
}
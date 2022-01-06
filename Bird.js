class Bird {
    constructor(x, y,avt) {
        this.x= x;
        this.y = y;
        this.avt = avt;
    }
    draw(ctx){
        let a = this.x;
        let b = this.y;
        let img = new Image();
        ctx.beginPath();
        img.onload = function (){
            ctx.drawImage(img, a, b, 200, 200);

        }
        img.src = this.avt;
        ctx.fill();
        ctx.closePath();
    }

}
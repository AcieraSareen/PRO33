class Snow {
    constructor(x, y) {
        this.image = loadImage("snow5.webp");
        var options = {
            restitution: 0.4,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color="white";
        
        World.add(world, this.body);
        
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
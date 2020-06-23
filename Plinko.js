class Plinko {
    constructor(x,y,radius) {
        var options = {
            isStatic:false  
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        this.radius = 10
        World.add(world,this.body);
    }

    display() {
        var pose = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("white");
        ellipse(pose.x,pose.y,this.x,this.y);
        pop();
    }
}
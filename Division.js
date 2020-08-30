class Divisions{
    constructor(x, y, w, y ) {
        var options = {
            isStatic:true
        }
    this.body = Bodies.rectangle(x, y, 10, 300, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    }


    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height)
    }
}
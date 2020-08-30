class Plinko{
    constructor(){
        var options={
            isStatic:true
          }

          this.body = Bodies.circle(240 ,10 ,10 ,options)
          this.radius = 10;
          World.add(world, this.body)
 }

 display(){

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(this.body, 0, 0, this.r);
    pop();
 }
}
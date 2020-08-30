class Particle {
    constructor(){

     var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2,
     }

     this.body = Bodies.circle(x ,y ,this.r ,option )
     this.color = color(ramdom(0,255), random(0,255), random(0,255));
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
class Circle{
    constructor(x,y,r){
      var options = {
        'isStatic': false,
        'restitution':1,
        'friction':0.5,
        'density':0.3
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r,options);

      World.add(world, this.body);
   }
   display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    strokeWeight(3)
    fill("Purple");
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
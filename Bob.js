class Bob{
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30;
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS)
        fill("pink");
        ellipse(pos.x,pos.y,this.radius);
    }
  
  }
  
class Mango{
    constructor(x,y,r){
        var op ={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.image = loadImage("images/mango.png")
        this.body = Bodies.circle(x,y,r,op);
        this.r = r
        World.add(world,this.body);

    }
    display(){

        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
       // fill("brown");
      // ellipseMode(RADIUS)
       fill("brown");
      // ellipse(this.body.position.x,this.body.position.y,this.circleRadius*2,this.circleRadius*2);
      image(this.image,0,0,this.r,this.r);
      pop()
    }
}
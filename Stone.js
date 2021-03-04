class Stone{
    constructor(x,y,r){
        var op ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r = r
        this.image = loadImage("images/stone.png")
        this.body = Bodies.circle(x,y,r,op);
        World.add(world,this.body);
        

    }
    display(){
        
        push()
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y)
      //  this.body.position.x = mouseX;
       // this.body.position.y = mouseY;
      //  ellipseMode(RADIUS)
        //fill("brown");
       //ellipse(this.body.position.x,this.body.position.y,this.circleRadius*2,this.circleRadius*2);
     image(this.image,0,0,this.r,this.r);
        pop()

    }
}
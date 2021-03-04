class Tree{
    constructor(x,y){
        var op ={
            isStatic:true
        }
        this.image = loadImage("images/tree.png")
        this.body = Bodies.rectangle(x,y,400,400,op);
        World.add(world,this.body);

    }
    display(){
        imageMode(CENTER);
       // fill("brown");
        image(this.image,this.body.position.x,this.body.position.y,400,400);
    }
}
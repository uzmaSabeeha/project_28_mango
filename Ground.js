class Ground{
    constructor(x,y){
        var op ={
            isStatic:true,
            friction:0.4
        }
        this.body = Bodies.rectangle(x,y,800,20,op);
        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,800,20);
    }
}
class Paper{
    constructor(x,y,r){
     var prop={
         isStatic: false,
         restituiton: 0.3,
         friction: 0.5,
         density: 1.2
     }

     this.body=Bodies.circle(x,y,r);
     this.r=r;
     World.add(world,this.body);
    }

    display(){
        circle(this.body.position.x,this.body.position.y,this.r*2);

    }
}
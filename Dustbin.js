class Dustbin{
    constructor(x,y,width,height){
     var prop={
         isStatic: true
     }

     this.body=Bodies.rectangle(x,y,width,height,prop);
     this.w=width;
     this.h=height;
     World.add(world,this.body);
    }
    display(){
      rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}
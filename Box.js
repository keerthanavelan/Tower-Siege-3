class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("galaxy_square.png");
  }
  display(){
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       console.log(this.visibility);
       this.Visiblity = this.Visiblity - 5;
       //console.log(this.Visiblity);
       tint(106, 13, 173,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, width, height);
       pop();
     }
  }
//   function score(){
//     if(this.Visiblity<0 && this.Visiblity>-105){
//       score++;
//       console.log("Yes the score is executed")
//     }
//   }
}

class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':1,
          'friction':0.2,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("fishbowl.jpg");
      World.add(world, this.body);
      this.Visiblity=255;
    }
    score(){
      if (this.Visiblity<0 && this.Visiblity >- 105){
        score=score+1;
      }
    }
    display(){
      if(this.body.velocity.x<2){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }

    }
}

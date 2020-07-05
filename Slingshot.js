


class Launcher {
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            'length': 40,
            stiffness:0.007
        }
    this.launcher=Matter.Constraint.create(options);
    World.add(world,this.launcher);
      
    }
    
    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    display(){
       // push();
    if(this.launcher.bodyA){
        strokeWeight(4);
        stroke("black");
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y);

    }

    }

}
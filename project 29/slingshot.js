class slingshot {
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.2,
        length:10
    }
    this.pointB=pointB
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            stroke(48.22);
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);

            pop();
        }
    }
     
    attach(body){
        this.sling.bodyA = body;
    }
}
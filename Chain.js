class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA, 
            bodyB : bodyB,
            lenght : 10, 
            stiffness : 0.04 
        } 

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        console.log(this.chain);
    }
    display(){
        var PointA = this.chain.bodyA.position;
        var PointB = this.chain.bodyB.position;
        strokeWeight(3);
        line(PointA.x,PointA.y,PointB.x,PointB.y);
    }
}
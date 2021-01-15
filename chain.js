class Chains {
    constructor(bodyA,bodyB){
        var option ={
            bodyA:bodyA,
            bodyB:bodyB,
            length: 100
        }
        this.chain= Constraint.create(option)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB =this.chain.bodyB.position;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
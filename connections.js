class Connect{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.06,
            length:99            
        }
        this.connetion =  Matter.Constraint.create(options)
        World.add(world,this.connetion)
    }
    display(){
        line(this.connetion.bodyA.position.x,this.connetion.bodyA.position.y,this.connetion.bodyB.position.x,this.connetion.bodyB.position.y)
    }
}
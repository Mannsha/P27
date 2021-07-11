class Rope
{
    constructor(body1,body2, offsetX, offsetY)
    {

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options={
            bodyA:body1,
            bodyB:body2,
    //        stiffness:0.04,
        //    length:200,
            
            //Remember the pointB property is how far away the object will be anchored to, NOT the exact coordinates
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display()
    {
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(4)
        stroke("white")

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x +this.offsetX
        var Anchor2Y = pointB.y + this.offsetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
}
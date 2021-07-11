
class Bob
{
    constructor(x,y,radius)
    {
        var options = {
            restitution: 1,
            friction: 0,
            density: 1.2

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x=x
        this.y=y
        this.radius=radius
        World.add(world,this.body)
        
    }
    display()
    {
        ellipseMode(RADIUS)
        stroke("blue")
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius)


    }

}




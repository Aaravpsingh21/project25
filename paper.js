class paper
{
    constructor(x,y,r,options)
    {
        var options ={
            isStatic:false,
            'fiction' : 0,
            'restitution' : 0.8,
            'density' : 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        this.image = loadImage("paper.png")
        World.add(world,this.body);

    }
    display()
    {
        var paperPos=this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        image(this.image,0,0,this.r,this.r);
        pop();



    }
    

}
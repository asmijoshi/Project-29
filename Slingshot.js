class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.body.polygon.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(255,255,255);
            
            if(pointA.x<220){
                
            strokeWeight(3)

            imageMode(CENTER);
            image(polygon_img,polygon.position.x,polygon.position.y,40,40);

            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
           
        }
            
        }
        
    }
    
}
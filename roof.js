class Roof
{
	constructor(x,y,widht,height){
	this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
	    this.x=x;
		this.y=y;
		
	this.width = width;	
     this.height = height;
     World.add(world,this.body);
	}
	display()
	{
			
					

			push()
			
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(this.body.position.x,this.body.position.y,this.width,this.height);
			pop()
			
	}

}
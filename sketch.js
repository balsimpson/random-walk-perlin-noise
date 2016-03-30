var walker;

function setup() {
  console.log('setting up');
  alert('set up');
  createCanvas(600, 400);
  // Create object
  walker = new Walker();
  background(127);

}

function draw() {
  walker.step();
  walker.display();
}

function Walker (){
	this.pos = createVector(width/2, height/2);
	this.noff = createVector(random(1000), random(1000));


	this.display = function(){
		stroke(0);
		strokeWeight(2);
		fill(51);
		ellipse(this.pos.x, this.pos.y, 50,50);
	}

	this.step = function(){
		//noise() takes  params value, valRangeMin, valRangeMax, desiredRangeMin,desiredRangeMax
		this.pos.x = map(noise(this.noff.x),0,1,0,width);
		this.pos.y = map(noise(this.noff.y),0,1,0,height);
		this.noff.add(0.01,0.01,0);
	
	}
}
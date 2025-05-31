function setup() {
  createCanvas(400, 400);
  background(200); 
}

function draw() {
  background(200); 

  drawAlien(200, 200); 
}

function drawAlien(x, y) {
  noStroke();

  
  fill(128, 0, 128); 
  ellipse(x, y + 40, 60, 100);   
  ellipse(x, y - 30, 80, 100); 

   fill(255); // white eyes
  ellipse(x - 20, y - 40, 15, 25);
  ellipse(x + 20, y - 40, 15, 25); 

  fill(0); 
  ellipse(x - 20, y - 40, 5, 10);
  ellipse(x + 20, y - 40, 5, 10);

  
  stroke(128, 0, 128);
  strokeWeight(4);
  line(x - 20, y - 80, x - 30, y - 100);
  line(x + 20, y - 80, x + 30, y - 100);

  fill(255, 0, 255); 
  noStroke();
  ellipse(x - 30, y - 100, 10);
  ellipse(x + 30, y - 100, 10);

  fill(128, 0, 128);
  ellipse(x - 40, y + 20, 20, 60); 
  ellipse(x + 40, y + 20, 20, 60); 

  
  ellipse(x - 15, y + 90, 15, 40); 
  ellipse(x + 15, y + 90, 15, 40); 
}

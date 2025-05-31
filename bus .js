function setup() {
  createCanvas(400, 400);
  background(220); 

  fill(163,46,46);
  rect(100, 200, 200, 50, 15); 
  rect(140, 150, 120, 50); 

  arc(200, 150, 120, 80, PI, 0, CHORD); 

  fill(19,10,70);
  rect(150, 160, 40, 30); 
  rect(210, 160, 40, 30); 

  
  fill(0);
  ellipse(140, 250, 40, 40); 
  ellipse(260, 250, 40, 40); 

  fill(200); 
  ellipse(140, 250, 20, 20); 
  ellipse(260, 250, 20, 20); 
}

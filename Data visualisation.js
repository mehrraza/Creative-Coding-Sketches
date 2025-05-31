let singers = [
  "Nusrat F. A. Khan", "Abida Parveen", "Atif Aslam", "Rahat F. A. Khan", "Ali Zafar",
  "Meesha Shafi", "Shafqat Amanat", "Momina Mustehsan", "Qurat-ul-Ain B.", "Asim Azhar"
];

let vals = [90, 85, 80, 75, 70, 65, 60, 55, 50, 45];
let colors = [];

function setup() {
  createCanvas(800, 500);
  // Generate vibrant colors
  for (let i = 0; i < singers.length; i++) 
    colors.push(color(random(50, 200), random(100, 220), random(150, 255), 220));
  noLoop();
}

function draw() {
  background(240);

  fill(0, 102, 0); 
  textAlign(CENTER);
  textSize(28);
  text("Popular Pakistani Singers", width / 2, 40);
  fill(25); 
  textSize(14);
  text("Popularity Ranking", width / 2, 70);

  let barW = width / (singers.length + 2);
  let startY = height - 50;

  for (let i = 0; i < singers.length; i++) {
    let h = map(vals[i], 0, 100, 0, height - 150);

    fill(colors[i]);
    rect(i * barW + barW, startY - h, barW * 0.8, h, 5);

    fill(0);
    textSize(12);
    text(vals[i] + "%", i * barW + barW + barW * 0.4, startY - h - 15);

    push();
    translate(i * barW + barW + barW * 0.4, startY + 20);
    rotate(-PI / 4);
    textSize(10);
    text(singers[i], 0, 0);
    pop();
  }

  // Pakistan flag element
  fill(255);
  noStroke();
  arc(50, 30, 40, 40, PI / 2, 3 * PI / 2);
  beginShape();
  vertex(70, 10);
  vertex(75, 20);
  vertex(85, 22);
  vertex(78, 30);
  vertex(80, 40);
  vertex(70, 35);
  vertex(60, 40);
  vertex(62, 30);
  vertex(55, 22);
  vertex(65, 20);
  endShape(CLOSE);
}

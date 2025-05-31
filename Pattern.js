let colors = [];

function setup() {
  createCanvas(600, 900);
  noLoop();
  colors = [
    color("#F26CA7"), 
    color("#F4A300"), 
    color("#4A90A4"), 
    color("#A44D75"), 
    color("#F7C6C7"), 
  ];
  background(240);
  drawPattern();
}

function drawPattern() {
  let rows = 30;
  let cols = 12;
  let spacingX = width / cols;
  let spacingY = height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xpos = x * spacingX;
      let ypos = y * spacingY;

      let flip = random() < 0.5;
      let col = random(colors);

      fill(col);
      noStroke();

      if (flip) {
        triangle(
          xpos + spacingX / 2, ypos,
          xpos, ypos + spacingY,
          xpos + spacingX, ypos + spacingY
        );
      } else {
        triangle(
          xpos, ypos,
          xpos + spacingX, ypos,
          xpos + spacingX / 2, ypos + spacingY
        );
      }
    }
  }
}
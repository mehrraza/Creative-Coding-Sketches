let player;
let gravity = 0.5;
let jumpStrength = -10;
let ground = [];

function setup() {
  createCanvas(400, 300);
  noSmooth(); // Makes the pixel art sharp

  player = {
    x: 50,
    y: 0,
    w: 16,
    h: 16,
    vx: 0,
    vy: 0,
    onGround: false
  };

  
  for (let i = 0; i < width; i += 16) {
    ground.push({ x: i, y: height - 16, w: 16, h: 16 });
  }

  
  ground.push({ x: 100, y: 200, w: 48, h: 16 });
  ground.push({ x: 180, y: 160, w: 48, h: 16 });
}

function draw() {
  background(30);


  player.vy += gravity;
  player.x += player.vx;
  player.y += player.vy;
  player.onGround = false;


  for (let block of ground) {
    if (
      player.x < block.x + block.w &&
      player.x + player.w > block.x &&
      player.y < block.y + block.h &&
      player.y + player.h > block.y
    ) {
    
      if (player.vy > 0) {
        player.y = block.y - player.h;
        player.vy = 0;
        player.onGround = true;
      } else if (player.vy < 0) {
        player.y = block.y + block.h;
        player.vy = 0;
      }
    }
  }

  
  player.vx = 0;
  if (keyIsDown(LEFT_ARROW)) player.vx = -2;
  if (keyIsDown(RIGHT_ARROW)) player.vx = 2;

 
  if (keyIsDown(UP_ARROW) && player.onGround) {
    player.vy = jumpStrength;
  }

  
  noStroke();
  fill(255, 100, 100);
  rect(player.x, player.y, player.w, player.h);

  
  fill(100, 200, 255);
  for (let block of ground) {
    rect(block.x, block.y, block.w, block.h);
  }
}
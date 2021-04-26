var w;

function setup() {
  createCanvas(400, 400);
  w1 = new Walker();
  background(220);
}

function draw() {
  w1.show();
  w1.move();
}

class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

show(){
  stroke(0);
  point(this.x, this.y);
}
  
  move(){
   /* let choice = floor(random(4)); // 0, 1, 2, or 3
    if(choice == 0) this.x ++
    else if(choice == 1) this.x --;
    else if(choice ==2) this.y ++;
    else this.y --;*/
    
    /*let xMove = random(-1, 1);
    let yMove = random(-1, 1);
    if(xMove < -0.5) xMove = -1;
    else if(xMove > 0.5) xMove = 1;
    else xMove = 0;
    if(yMove < -0.5) yMove = -1;
    else if(yMove > 0.5) yMove = 1;
    else yMove = 0;
    this.x = this.x + xMove;
    this.y = this.y + yMove;*/
    
    var bob = [1, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4];
    var choice = random(bob);
    if(choice == 4) this.y++;
    else if(choice == 3) this.y--;
    else if(choice == 2) this.x ++;
    else this.x--;
    
    /*let r = random(1);
    if(r < 0.4) this.x ++;
    else if(r < 0.5) this.x--;
    else if(r < 0.9) this.y++;
    else this.y--;*/
    
  }
}
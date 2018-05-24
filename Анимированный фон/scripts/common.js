const canvas= document.getElementById('wall'),
      ctx = canvas.getContext('2d'),      
      circles = [],
      crosses = [],
      amount = Math.round(randomNum(25, 100)),
      width = canvas.width,
      height = canvas.height;
ctx.strokeStyle = 'white';

function randomNum(a, b) {
  return (Math.random() * (b - a)) + a;
}

function nextPointFirst(x, y, time) {
  return {
    x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
    y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
  };
}

function nextPointSecond(x, y, time) {
  return {
    x: x + Math.sin((x + (time / 10)) / 100) * 5,
    y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
  }
}

class MovObj {
  constructor() {
    this.xStart = Math.round(randomNum(0, width));
    this.yStart = Math.round(randomNum(0, height));
    this.x = this.xStart;
    this.y = this.yStart;
    this.size = randomNum(0.1, 0.6);
    this.lineWidth = 5 * this.size;
  }
  
  updatePos() {
    const {x, y} = this.nextPoint(this.xStart, this.yStart, Date.now());
    this.x = x;
    this.y = y;
  }
}

class CirclesObject extends MovObj {
  constructor() {
    super();
    this.radius = 12 * this.size;
  }
  
  showCircles() {
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

class CrossesObject extends MovObj {
  constructor() {
    super();
    this.side = 10 * this.size;
    this.angle = randomNum(0, 2 * Math.PI);
    this.speed = randomNum(-0.2, 0.2);
  }
  
  updatePos() {
    super.updatePos();
    this.angle += this.speed * 1;
  }
  
  showCrosses() {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.moveTo((-this.side), 0);
    ctx.lineTo((this.side), 0);
    ctx.moveTo(0, (-this.side));
    ctx.lineTo(0, (this.side));
    ctx.stroke();
    ctx.restore();
  }
}

for (let i = 0; i < amount; i++) {
  const cir = new CirclesObject;
  cir.nextPoint = (Math.random() > 0.5) ? nextPointFirst : nextPointSecond;
  circles.push(cir);
  
  const cr = new CrossesObject;
  cr.nextPoint = (Math.random() > 0.5) ? nextPointFirst : nextPointSecond;
  crosses.push(cr);
}

setInterval(showAll, 1000 / 20);

function showAll() {
  ctx.clearRect(0, 0, width, height);
  
  for (let i = 0; i < amount; i++) {
    circles[i].updatePos();
    crosses[i].updatePos();
    circles[i].showCircles()
    crosses[i].showCrosses();
  }
}
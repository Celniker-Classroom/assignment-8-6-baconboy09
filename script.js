// ----- Functions to implement -----
let c = 0;
// 1) myFunc(): persistent counter
function myFunc() {
  c += 1
  return c
}

// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max){
  if (!isNaN(max)){
    a = Math.floor(Math.random()*max)+1
  } else {
    a = 0
  }
  return a
}
// 3) myAdder(x, y): numeric sum
function myAdder(x,y){
  return parseInt(x)+parseInt(y)
}
// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1,y1,x2,y2){
  return Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
  const [vA, vB, vC] = [Number(a), Number(b), Number(c)];
  const disc = vB * vB - 4 * vA * vC;
  if (disc < 0) return "No real roots";
  const s = Math.sqrt(disc);
  return [(-vB + s) / (2 * vA), (-vB - s) / (2 * vA)];
}

// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}

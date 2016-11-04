
/* MOTIF ALÉATOIRE N° 1

function setup() {
    createCanvas(600,600);
    frameRate(1);
}

function draw(){
  background(20);

for(var y = 50; y <= 500 ; y+=50) {
  createLine(y);
  }

}

function createLine( posY ) {


  for( var x =  50; x <= 450 ; x = x + 100){
    push();
    translate(x, posY);
    motif(x, posY);
    pop();
  }

   // LE CODE REMPLACÉ PAR LES LIGNES PRÉCÉDENTES !
  push();
  translate(150,50);
  motif();
  pop();

  push();
  translate(250,50);
  motif();
  pop();

  push();
  translate(350,50);
  motif();
  pop();

  push();
  translate(450,50);
  motif();
  pop();

}


function motif(paramX, paramY) {
  stroke(230)
  fill(230);

  var probaX= map( paramX, 150,450,90,30) ;
  var probaY= map( paramY, 50,350,30,90) ;

  var proba = map (probaX * probaY, 30*30, 90*90, 10, 90);

  if(random(100) < proba) {
    triangle(0,0,100,0,0,50);
  }

  if(random(100) < proba) {
    triangle(100,50,100,0,0,50);
  }

}
*/



// *MOTIF ALÉATOIRE N° 2



function setup() {
  createCanvas(500,500);
  frameRate(1);
  noFill();

}

function draw() {
  background(255);
  stroke('#3c6867');
  fill('#3c6867');

  for (x = 0; x<width-25; x += 48){
    for (y = 0; y<height-25; y += 25){

      var r = random(50);

      if(random(100) < 90) {
        ellipse (x, y, 25, 25);;
      }


    }
  }


  for (x = 24; x<width-25; x += 48){
    for (y = 15; y<height-25; y += 25){

      var r = random(50);

      if(random(100) < 90) {
        ellipse (x, y, 25, 25);;
      }

    }
  }


  for (x = 0; x<width-25; x += 48){
    for (y = 0; y<height-25; y += 25){

      var r = random(50);

      if(random(100) < 2) {
        stroke(255);
        noFill();
        polygon(x,y,32,6);
      }

    }
  }


  for (x = 24; x<width-25; x += 48){
    for (y = 15; y<height-25; y += 25){

      if(random(100) < 2) {
        stroke(255);
        noFill();
        polygon(x,y,32,6);
      }

    }
  }


}


function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

console.clear();
var socket;
var ranger;
var track,
    mic,
    fft,
    spectrum,
    waveform,
    peaks,
    amp;

function preload() {
  // track = loadSound( 'https://s3-ap-southeast-1.amazonaws.com/codepen-large-media/Il3CLE5LXkT1.128.mp3' );
}

function setup() {
  createCanvas( windowWidth, windowHeight );
  frameRate(10);
  noFill();
  colorMode(HSB)

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(0.2);
  osc.start();

//  masterVolume( 1 );

  // track.play();

  mic = new p5.AudioIn()
  mic.start();
  //
  fft = new p5.FFT();
  fft.setInput( mic );
  // peaks = track.getPeaks( track.duration() * 10 );

  // amplitude = new p5.Amplitude();
  // amplitude.setInput( track );
  //textAlign( RIGHT );

  socket = io.connect("//172.16.128.119:8000");

  socket.on( 'connected', function( data ){
		document.querySelector( 'p' ).innerText = data.msg;
	} );

// // RECEIVE MOUSE POSITION
//   socket.on( 'mouse', function( data ){
//         //console.log( JSON.stringify(data) );
// 		    document.querySelector( 'p' ).innerText = JSON.stringify(data);
//         remoteMouseX = data.mouseX;
//         remoteMouseY = data.mouseY;
// 	} );

// RECEIVE MOUSE POSITION
  socket.on( 'ranger', function( data ){
        //console.log( JSON.stringify(data) );
		    document.querySelector( 'p' ).innerText = JSON.stringify(data);
        ranger = data;
	} );

}

function draw() {
  couleur = random(50 , 60);
  background(100);


// DESSIN DU MOTIF

  spectrum = fft.analyze();
  var n = 0;
  for (x = 0; x<width-25; x += 24){
    for (y = 0; y<height-25; y += 25){
        fill(337,ranger,couleur);
        stroke(337, ranger,couleur);
        ellipse (x, y + ( ( x / 24 ) % 2 ) * 15, spectrum[n]/2);
        n++;
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


function windowResized() {
  resizeCanvas( windowWidth, windowHeight );
}


let myVideo = null;

function setup() {
createCanvas(windowWidth, windowHeight);

  myVideo = createCapture(VIDEO, 
    function(stream) {
	let p5lm = new p5LiveMedia(this, "CAPTURE", stream, "Unique room name")
  	p5lm.on('stream', gotStream);
    }
  );
  myVideo.hide();
}

function draw(){
  background(255, 255, 255);
  
  // scale(-1,1);
  image(myVideo,0,0,width,height/2-10);
  if (otherVideo != null){
    fill(250, 217, 248,1);
    strokeWeight(4);
    stroke(18, 105, 255);
     rect(0, 0, width, height/2-10);
    image(otherVideo,0,height/2,width,height/2);
  }
  fill(68, 255, 0);
  noStroke();
  textSize(14);
  
text('Online', 30,20);
  noStroke();
  circle(20, 15, 10);
  fill(194, 194, 194);
  noStroke();
  circle(20, height/2+30, 10);
//   another video stroke 
  fill(194, 194, 194,0.5);
    strokeWeight(2);
    stroke(33, 230, 252);
  rect(0, height/2, width, height/2);
}
let otherVideo;
function gotStream(stream, id) {
  otherVideo = stream;
  //otherVideo.id and id are the same and unique identifier
  otherVideo.hide();
}
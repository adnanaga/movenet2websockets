let detector;
let poses;
let video;
let wv = 640; //the default input size of the camera
let hv = 480;
let w = 640; //the size of the canvas
let h = 480;

var host = 'localhost:8080';
var socket; // the websocket


async function init() {
  
  const detectorConfig = {
    modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER
  };
  
  detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
}

async function videoReady() {
  
  console.log("Capture loaded... or has it?");
  console.log(video);
  console.log("Capture: " + video.width + ", " + video.height);
  console.log(
    "Video element: " + video.elt.videoWidth + ", " + video.elt.videoHeight
  );

  wv = video.elt.videoWidth;
  hv = video.elt.videoHeight;

  console.log("video ready");
  await getPoses();
}

async function setup() {
  socket = new WebSocket('ws://' + host);
  // socket.onopen = ;
  
  video = createCapture(VIDEO, videoReady);
  let cnv = createCanvas(w, h);
  cnv.style("position", "absolute");
  await init();
}

async function getPoses() {

  
  

  if (detector) {
    poses = await detector.estimatePoses(video.elt);
  }

  //console.log(poses);
  requestAnimationFrame(getPoses);
}

function draw() {
  
  if (poses && poses.length > 0) {
    clear();


    // socket.send(poses[0]);
    socket.send(JSON.stringify(poses[0]));

        for (let kp of poses[0].keypoints) {
          let { x, y, score } = kp;
          x = x/wv;
          y = y/hv;

          if (score > 0.5) {
            fill(255);
            stroke(0);
            strokeWeight(4);
            circle(x*w,y*h, 16);
          }
        }
  }
  line(0,hv/2, wv, hv/2);
  line(wv/2, 0, wv/2, hv);
}

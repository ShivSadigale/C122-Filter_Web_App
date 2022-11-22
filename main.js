var noseX = "";
var noseY = "";

function preload() { 
    img = loadImage('https://i.postimg.cc/C5j5h73M/images-removebg-preview.png');
 }
 
 function setup() {
     canvas = createCanvas(400, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(400, 300);
     video.hide();
 
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
 }
 
 function draw() {
    image(video, 0, 0, 400, 300);
    image(img, noseX - 20, noseY-15, 55, 35);
 }
 
 function take_snapshot() {
     save('My Filter Image.png');
 }
 
 function modelLoaded() { 
     console.log('poseNet Initialized');
 }
 
 function gotPoses(results) {
     if(results.length > 0) {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("nose x = "  + results[0].pose.nose.x);
         console.log("nose y = "  + results[0].pose.nose.y);
     }
 }
 
 
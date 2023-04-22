noseX = 0;
noseY = 0;
function preload(){
whiskers = loadImage('https://e1.pngegg.com/pngimages/497/50/png-clipart-sa-y-people-black-cat-s-whiskers-and-nose.png');
}

function setup (){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotposes);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function takesnapshot() {
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('posenet is initialized');
}
function gotposes(){
    if(results.length > 0){
        console.log (results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
    }
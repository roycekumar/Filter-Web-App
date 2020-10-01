noseX=0;
noseY=0;
EyesXR=0;
EyesYR=0;
RedX=0;
RedY=0;
Filter="Glass";
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/cLkzQ7Vg/Clown-Nose.png");
    glasses=loadImage("https://i.postimg.cc/CKBf1YGB/Glasses.png");
    red_hat=loadImage("https://i.postimg.cc/xTMcsxYq/zo-XJx-FI-red-hat-clipart.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        EyesXR=results[0].pose.leftEye.x-37;
        EyesYR=results[0].pose.leftEye.y-18;
        RedX=results[0].pose.leftEye.x-40;
        RedY=results[0].pose.leftEye.y-75;
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
    }
}
function draw(){
    push();
    translate(width,0);
    scale(-1, 1);
    pop();
    image(video,0,0,300,300);
    if (Filter=="Glass"){
        image(glasses,EyesXR,EyesYR,50,30);
    }
    else if(Filter=="Nose"){
        image(clown_nose,noseX,noseY,30,30);
    }
    else if(Filter=="Hat"){
        image(red_hat,RedX,RedY,60,60);
    }
 
}
function take_snapshot(){
    save('FilterImage.png');
}
function change(){
    Filter="Nose";
    console.log(Glass);
    draw();
}
function change_again(){
    Filter="Glass";
    console.log(Glass);
    draw();
}
function hat(){
    Filter="Hat";
    console.log(Glass);
    draw();
}
nouseX=0;
nouseY=0;
difference = 0;
rightwirstxyz = 0;
leftwirstxyz = 0;
function setup() { video = createCapture(VIDEO); 
video.size(550, 500);

 canvas = createCanvas(550, 550); 
 canvas.position(560,150);
 poseNet = ml5.poseNet(video, modelLoaded); 
 poseNet.on('pose', gotPoses);}
 function modelLoaded() 
 { console.log('PoseNet Is Initialized!'); }

 function gotPoses(results)
 { if(results.length > 0)

    { console.log(results);
    nouseX = results[0].pose.nose.x;
    nouseY = results[0].pose.nose.y;
    console.log("nouseX =" + nouseX +"nouseY =" + nouseY);
    leftwirstxyz = results[0].pose.leftWrist.x;
    rightwirstxyz = results[0].pose.rightWrist.x;
    difference = floor(leftwirstxyz - rightwirstxyz)

    console.log(" leftwirstxyz = " +  leftwirstxyz + "  rightwirstxyz = "+  rightwirstxyz + " difference = " + difference);
    }
}
function draw()
{ background('#969A97');
document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
fill('#F90093');
stroke('#F90093');
square(nouseX, nouseY, difference);
}

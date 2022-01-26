function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status-Detecting Object";
    
}
img="";
status1="";
function modelLoaded(){
    console.log("model is loaded");
    status1="true";
    objectdetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
        
    }
    else {console.log(results);
    }
}
function preload(){
    img=loadImage("dog_cat.jpg");

}
function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);
    fill("#ff0000");
    text("Cat",320,120);
    noFill();
    stroke("#ff0000");
    rect(300,90,270,320);
}

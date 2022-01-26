function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status-Detecting Object";
    
}
img="";
status1="";
objects=[];
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
        objects=results;
    }
}
function preload(){
    img=loadImage("phone.jpg");

}
function draw(){
    image(img,0,0,640,420);
    if(status1!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: Object Detected";
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+ percent+"%", objects[i].x,objects[i].y);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }

    }
}

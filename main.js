Webcam.set({
    width:370,
    height:310,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

prediction1="";
prediction2="";

function takesnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
    console.log("picture")
}

console.log('ml5 version:',ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tXA9DJWaW/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded!");
}
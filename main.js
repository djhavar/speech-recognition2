x=0
y=0
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
document.getElementById("status").innerHTML = "System is listen please speak";
recognition.start();
}                                                                                  

function setup() {
    canvas = createCansvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('mobilnet',modelloaded);
}

function modelloaded() {
    console.log('modal loaded!');
}

function draw() {
   image(video,0,0,300,300);
   classifier.classify(video,gotresult);
}

var previous_result = '';

function gotresult(error,result) {
    if (error){
        console.error(error);
 } else {
     if(( result[0]))
 }

}
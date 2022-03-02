function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true, video:false});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8ALgiezsz/ model.json',, { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results)[
    if (error)
    {
        console.log(error);
    }
    else{
        console.log(results);
    }
}


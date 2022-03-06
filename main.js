noseX = 0;
noseY = 0;

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    //var, library, predefined function//
    poseNet = ml5.poseNet(video, modelLoaded);
    //var for webcam, confirm posenet initalized//

    poseNet.on('pose', gotPoses)
}

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function draw()
{
    image(video, 0, 0, 300, 300)
    image(clown_nose, noseX, noseY, 30, 30);
}

function modelLoaded()
{
    console.log('Posenet is initialized.');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function take_snapshot()
{
    save('myFilterImage.png');
}
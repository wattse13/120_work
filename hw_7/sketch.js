
//Creates new javascript object
//Creates new variables related to javascript object and assigns them initial values
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

//Initiates beginning coding environment
function setup() {

    //Sets canvas width and height
    createCanvas(windowWidth, 400);

    //Background draws only once at beginning
    //Objects drawn later are not erased
    background(255);
}



function draw() {

    //Reassigns new values to ball.x and ball.y variables
    //Causes ellipse to move across the canvas
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    //Prevetns ellipse from passing through the left or right side of canvas
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }

    //Prevents ellipse from passing through top or bottom of canvas
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    //Sets ellipse fill color to white
    fill(255);

    //Causes ellipse to move as custom variables, which change in value, are used as position values
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

//Changes how the ellipse moves if mouse clicked is evaluated to be true
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}


//Creates new javascript object
//Creates new variables related to javascript object and assigns them initial values
let ball = {};
ball.width = 30;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

//Added new ball related variables to have more control over ball fill color
ball.color;
ball.color_r = 255;
ball.color_g = 255;
ball.color_b = 255;

//Initiates beginning coding environment
function setup() {

    //Sets canvas width and height
    createCanvas(windowWidth, 400);

    //Background draws only once at beginning
    //Objects drawn later are not erased
    background(255);

    //Reassigns new value to ball.color variable.
    //ball.color will fill with white until modified later
    ball.color = color( ball.color_r, ball.color_g, ball.color_b );

}

//Creates new global variable and assigns an initial value of 0
var clickPoint = 0;

function draw() {

    //Reassigns new values to ball.x and ball.y variables
    //Causes ellipse to move across the canvas
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    //Reassigns new values to ball.color_r-g-b variables
    //Assigns a random whole number between 0 and 255 to ball.color_r-g-b variables
    ball.color_r = floor(random(255));
    ball.color_g = floor(random(255));
    ball.color_b = floor(random(255));

    //Creates new local variable and assigns distance between mouseX mouseY and ball.x ball.y as a value
    //Inspired by code found in "Make: Getting Started with p5.js" on page 74
    //My variation uses custom variables ball.x and ball.y to allow shape movement across canvas
    var rollDistance = dist( mouseX, mouseY, ball.x, ball.y );

    //Creates text sandbox
    push();

      //Sets text size, allignment, stroke color, and fill color of text
      textSize( 36 );
      textAlign( RIGHT );
      stroke( 'white' );
      fill ( 'black' );

      //Creates new local string variable
      //Assigns values of string "Points!" and value from custom variable on line 36
      let str = "Points!" + clickPoint;

      //Draws string: "Points + variable clickPoint value" on screen
      text( str, width / 9, height / 2 );

    pop();

    //Prevetns ellipse from passing through the left or right side of canvas
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }

    //Prevents ellipse from passing through top or bottom of canvas
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    //Changes the shape's color if shape passes across edges of canvas
    if ((ball.x >= width || ball.x <= 0) || (ball.y >= height || ball.y <= 0))  {
      ball.color = color( ball.color_r, ball.color_g, ball.color_b );
    }

    //If when evaluated it's true that mouseX and mouseY values are smaller than ball.width values then the shape fills with white
    if ( rollDistance < ball.width ) {
      fill( 255 );

    //If when evaluated it's false that mouseX and mouseY values are smaller than ball.width values then the shape fills with ball.color value parameters
    } else {

      fill (ball.color);
    }

    //If when evaluated and both mouseX's position is greater than width divided by two and mouseY's position is greater than height divided by 2 are true, then a square is drawn
    if ( mouseX > width / 2 && mouseY > height / 2 ) {

      //Draws square with ball.x and ball.y defining its center
      //Ball.x and ball.y variables change over time because of lines 42 and 43 causing shape to move
      rectMode( RADIUS );
      rect( ball.x, ball.y, ball.width, ball.width );

    //If when evaluated and either mouseX's position is greater than width divided by two or mouseY's position is greater than height divided by two are false, then an ellipse is drawn
    } else {

      //Draws ellipse with ball.x and ball.y defining its center
      //Ball.x and ball.y variables change over time because of lines 42 and 43 causing shape to move
      ellipseMode( RADIUS );
      ellipse(ball.x, ball.y, ball.width, ball.width);
    }

    //If the user clicks when it is true that the rollDistance value is less then the ball.width value 1 is added to the clickPoint value
    //Inspired by class website page: More Mouse Events
    if ( rollDistance < ball.width ) {
      if ( mouseIsPressed ) {
        clickPoint++;
        return false;
      }
    }

}

//Changes how the ellipse moves if mouse clicked is evaluated to be true
function mousePressed() {

    //Map takes mouseX paramters 0 and width or height and converts them to values between 0.5 and 10
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}

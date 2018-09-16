function setup(){

// Creating canvas on which to draw monster.
  createCanvas( 600, 600 );
}

function draw(){

//Created sandbox to avoid problems between draw function and translate, rotate, or scale functions.
push();

  //Set background color.
  background(128);

  //Centered 'grid' in middle of canvas.
  translate( 300, 300 );

  /****************************************************************************/
  //Body
  /****************************************************************************/

  //Sandbox for body
  push();

    //Moved grid
    translate( 75, 75 );

    //Rotated grid counter-clockwise by 30 degrees
    rotate( radians(-30));

    //Shaped and colored body
    fill('rgb(40, 0, 42)');
    ellipse( 0, 0, 600, 350 );

  pop();

  /****************************************************************************/
  //Mouth
  /****************************************************************************/

  //Created new sandbox for mouth section of monster.
  push();

    // Outer mouth shape and color
    noStroke();
    fill('rgb(60, 35, 75)');
    ellipse( -100, 100, 300 );

    //Mouth middle shape and color
    noStroke();
    fill('rgb( 40, 35, 50 )');
    ellipse( -100, 100, 200 );

    //Mouth center shape and color
    fill('black');
    ellipse( -100, 100, 100 );

  pop();

  /****************************************************************************/
  //Teeth
  /****************************************************************************/

    //Inner Teeth sandbox
    push();

      //Centered grid in mouth
      translate( -100, 100 );

        //First tooth sandbox
        push();

          //Moved grid center
          translate( 25, 0 );

          //Colored and created tooth shape
          fill( 'rgb(62, 75, 5)');
          arc( 0, 10, 50, 50, 0, QUARTER_PI );

        pop();


      //Second tooth sandbox
      push();

        //Reflected tooth across the y axis
        scale( -1, 1 );

        //Moved grid center
        translate( 25, 0 );

        //Colored and created second tooth shape
        fill( 'rgb(63, 75, 5)');
        arc( 0, 10, 50, 50, 0, QUARTER_PI );

      pop();

      //Third tooth Sandbox
      push();

        //Reflected tooth across x axis
        scale( 1, -1 );

        //Moved grid center
        translate( 10, 22 );

        //Rotated grid so thrid tooth was drawn in a vertical position (pointy end pointing down).
        rotate( radians(66));

        //Colored and created third tooth shape
        fill('rgb(63, 75, 5)');
        arc( 0, 10, 50, 50, 0, QUARTER_PI );

      pop();

    pop();

    //Outer Teeth

      //Outer teeth sandbox
      push();

        //Centered grid in inner mouth.
        translate( -100, 100 );

          //First outer tooth sandbox
          push();

            //Moved grid center
            translate( 0, 90 );

            //Colored and shaped first outer tooth
            fill('rgb(200, 215, 5)');
            arc( 5, 0, 135, 135, radians(45), radians(135) );

          pop();

          //Second outer tooth sandbox
          push();

            //Reflected second tooth across the x axis
            scale( 1, -1 );

            //Rotated grid by 66 degrees
            rotate( radians(66));

            //Moved grid center
            translate( 0, 90 );

            //Colored and shaped second outer tooth
            fill('rgb(200, 215, 5)');
            arc( 5, 0, 135, 135, radians(45), radians(135) );

          pop();

          //Third outer tooth sandbox
          push();

            //Reflected second tooth across the x axis
            scale( 1, -1 );

            //Rotated grid by 294 degrees
            rotate( radians(294));

            //Moved grid center
            translate( 0, 90 );

            //Colored and shaped third outer tooth
            fill('rgb(200, 215, 5)');
            arc( 5, 0, 135, 135, radians(45), radians(135) );

          pop();

        pop();


  /****************************************************************************/
  //Eyestalks
  /****************************************************************************/

  //Sandbox for eyestalks
  push();

    //Moved grid to top of mouth
    translate( -100, -60 );

    //Left eyestalk line and color
    stroke('rgb( 100, 35, 120 )');
    strokeWeight(30);
    line( 0, 0, -125, -125 );

      //Sandbox for right eyestalk
      push();

        //Reflected left eyestalk across y axis
        scale( -1, 1 );

        //Right eye stalk line and color
        stroke('rgb( 100, 35, 120 )');
        strokeWeight(30);
        line( 0, 0, -125, -125 );

      pop();

  pop();

  /****************************************************************************/
  //Eyes
  /****************************************************************************/

  //Sandbox for left eye
  push();

    //Centered grid at top of left eyestalk
    translate( -230, -190 );

    //Left eyeball shape and color
    fill('rgba(58, 30, 103, 0.85)');
    ellipse( 0, 0, 40 );

    //Left pupil shape and color
    fill('rgb(159, 195, 29)');
    ellipse( 0, 0, 20, 40 );

  pop();

  //Sandbox for right eye
  push();

    //Centered grid at top of right eyestalk
    translate( 30, -190 );

    //Right eyeball shape and color
    fill('rgba(58, 30, 103, 0.85)');
    ellipse( 0, 0, 40 );

    //Right pupil shape and color
    fill('rgb(159, 195, 29)');
    ellipse( 0, 0, 20, 40 );

  pop();


  /****************************************************************************/
  //lips
  /****************************************************************************/

  //Created lips sandbox
  push();

    //Lips shape and color
    stroke('rgb(80, 35, 100)');
    strokeWeight(20);
    noFill();
    ellipse( -100, 100, 300 );

  pop();

  /****************************************************************************/
  //Body
  /****************************************************************************/

pop();

}

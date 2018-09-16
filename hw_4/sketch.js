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

  //Used ellipse to see if grid was centered correctly.
  // ellipse( 0, 0, 50 );

  /****************************************************************************/
  //Mouth
  /****************************************************************************/

  //created new sandbox for mouth section of monster.
  push();

      // Sandbox for lips
      push();

        // Gums or lips
        // stroke('rgb(80, 35, 100)');
        // strokeWeight(20);

        // Outer mouth
        noStroke();
        fill('rgb(60, 35, 75)');
        ellipse( -100, 100, 300 );

      pop();

    //Mouth middle
    noStroke();
    fill('rgb( 40, 35, 50 )');
    ellipse( -100, 100, 200 );

    //Mouth center
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
          fill( 'white');
          arc( 0, 10, 50, 50, 0, QUARTER_PI );

        pop();


      //Second tooth sandbox
      push();

        //Reflecting tooth across the y axis
        scale( -1, 1 );

        //Moved grid center
        translate( 25, 0 );

        //Colored and created second tooth shape
        fill( 'white');
        arc( 0, 10, 50, 50, 0, QUARTER_PI );

      pop();

      //Third tooth Sandbox
      push();

        //Reflecting tooth across x axis
        scale( 1, -1 );

        //Moved grid center
        translate( 10, 22 );

        //Rotated grid so thrid tooth was drawn in a vertical position (pointy end pointing down).
        rotate( radians(66));

        //Colored and created third tooth shape
        fill('white');
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
            fill('white');
            arc( 5, 0, 135, 135, radians(45), radians(135) );

          pop();

          //Second outer tooth sandbox
          push();

            //Reflecting second tooth across the x axis
            scale( 1, -1 );

            //Rotating grid by 66 degrees
            rotate( radians(66));

            //Moved grid center
            translate( 0, 90 );

            //Colored and shaped second outer tooth
            fill('white');
            arc( 5, 0, 135, 135, radians(45), radians(135) );

          pop();

          //Third outer tooth sandbox
          push();

            //Reflecting second tooth across the x axis
            scale( 1, -1 );

            //Rotated grid by 294 degrees
            rotate( radians(294));

            //Moved grid center
            translate( 0, 90 );

            //Colored and shaped third outer tooth
            fill('white');
            arc( 5, 0, 135, 135, radians(45), radians(135) );

          pop();

        pop();

  /****************************************************************************/
  //lips
  /****************************************************************************/

  //Created lips sandbox
  push();

    //Shaped and colored lips
    stroke('rgb(80, 35, 100)');
    strokeWeight(20);
    noFill();
    ellipse( -100, 100, 300 );

  pop();

pop();

}

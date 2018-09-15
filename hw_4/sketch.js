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

  /**********************************************************/
  //Mouth

  //created new sandbox for mouth section of monster.
  push();

    // Sandbox for lips
    push();

    // Gums or lips
    stroke('rgb(80, 35, 100)');
    strokeWeight(20);

    // Outer mouth
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


pop();

}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = width/2;
    var y = height/2;
    
    // ufoGlass
    fill('#B0E0E6 ')
    ellipse(x, y-80, 400, 500);
    
    // face
    noStroke();
    fill('#d4f442');
    ellipse(x, y, 200, 200);
    
    // mouth
     fill('black');
     ellipse(x, y+20, 150, 64);
    
    // eyeStalkLeft
    fill('#d4f442');
    ellipse(x+40, y-130, 32, 128);
    
    // eyeStalkRight
    fill('#d4f442');
    ellipse(x-40, y-130, 32, 128);
    
     // eyeRight
    fill('yellow');
    ellipse(x-42, y-200, 64, 64);
    
    // eyeLeft
    fill('yellow');
    ellipse(x+42, y-200, 64, 64);
    
    // eyePupilRight
    fill('black');
    ellipse(x-42, y-200, 10, 10)
    
    // eyePupilLeft
    fill('black');
    ellipse(x+42, y-200, 10, 10);
    
    // ufoBeam
    fill('#00FFFF');
    ellipse(x, y+350, 350, 500);
    
    // ufo
    fill('gray');
    ellipse(x, y+150, 600, 100)
    
    // ufoLight1
    fill('yellow');
    ellipse(x-200, y+150, 50, 50);
    
    // ufoLight2
    fill('yellow');
    ellipse(x-100, y+150, 50, 50);
    
    // ufoLight3
    fill('yellow');
    ellipse(x, y+150, 50, 50);
    
    // ufoLight4
    fill('yellow');
    ellipse(x+100, y+150, 50, 50);
    
    // ufoLight5
    fill('yellow');
    ellipse(x+200, y+150, 50, 50);
    
    /* pupilLeft
    fill('#7FC35E');
    ellipse(x+42, y-26, 40, 40);
    
    // eyeRight
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64, 64);
    
    // pupilRight
    fill('#7FC35E');
    ellipse(x-42, y-26, 40, 40);
    
    // earLeft
    fill('#52C5DC');
    push();
    translate(x-100, y-80);
    rotate(Math.PI / 4);
    ellipse(0, 0, 52, 92);
    pop();
    
    // earRight
    fill('#52C5DC');
    push();
    translate(x+100, y-80);
    rotate(-Math.PI / 4);
    ellipse(0, 0, 52, 92);
    pop();
    
    // tongue
    fill('#EE3E36');
    arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
    */
}
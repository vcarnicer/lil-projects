function setup() {
    createCanvas(480, 120);
}


function draw()
{       
    background(150, 150, 60);
    
    //Pterodactilo
    fill(255);
    beginShape();
    strokeWeight(2);
    vertex(50, 120);
    vertex(100, 90);
    vertex(110, 60);
    vertex(80, 20);
    vertex(210, 60);
    vertex(160, 80);
    vertex(200, 90);
    vertex(140, 100);
    vertex(130, 120);
    endShape();
    fill(0);    
    
    
    if(frameCount % 40 > 0 && frameCount % 40 < 20){
        line(150, 60, 160, 60);
    } else {
        ellipse(155, 60, 8, 8);
    }
    
    //Pterodactilo
    fill(255);
    beginShape();
    strokeJoin(ROUND);
    vertex(370, 120);
    vertex(360, 90);
    vertex(290, 80);
    vertex(340, 70);
    vertex(280, 50);
    vertex(420, 10);
    vertex(390, 50);
    vertex(410, 90);
    vertex(460, 120);
    endShape();
    fill(0);
    
    
    if(frameCount % 40 > 5 && frameCount % 40 < 15){
        line(340, 50, 350, 50);
    } else {
        ellipse(345, 50, 10, 10)
    }
}

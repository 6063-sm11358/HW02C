function setup() {
    createCanvas(970,650);
    background('#F5F5DC');
}

function draw() {
    strokeWeight(0);
    fill('#303030');
    beginShape();       //shape1
        //top points
        vertex(15,20);              //p1: top left
        vertex(300,20);             //p2: top mid-left up
        vertex(300,27);             //p3: top mid-left down
        vertex(375,27);             //p4: top mid-right down
        vertex(375,20);             //p5: top mid-right up
        vertex(750,20);             //p6: top right up
        vertex(750,27);             //p7: top right down
        vertex(950,27);             //p8: top right-end
        
        //bottom points
        vertex(950,90);             //p1: bottom right-end
        vertex(720,90);             //p2: bottom right down
        vertex(720,80);             //p3: bottom right up
        vertex(395,80);             //p4: bottom mid-right up
        vertex(395,90);             //p5: bottom mid-right down
        vertex(280,90);             //p6: bottom mid-left down
        vertex(280,80);             //p7: bottom mid-left up
        vertex(15,80);              //p8: bottom left
    endShape(CLOSE);

    translate(0,75);
    beginShape();       //shape2
        //top points
        vertex(15,15);              //p1: top left
        vertex(265,15);             //p2: top mid-left up
        vertex(265,35);             //p3: top mid-left down
        vertex(410,35);             //p4: top mid-right down
        vertex(410,15);             //p5: top mid-right up
        vertex(710,15);             //p6: top right up
        vertex(710,35);             //p7: top right down
        vertex(950,35);             //p8: top right-end
        
        //bottom points
        vertex(950,95);             //p1: bottom right-end
        vertex(700,95);             //p2: bottom right down
        vertex(700,80);             //p3: bottom right up
        vertex(415,80);             //p4: bottom mid-right up
        vertex(415,95);             //p5: bottom mid-right down
        vertex(260,95);             //p6: bottom mid-left down
        vertex(260,80);             //p7: bottom mid-left up
        vertex(15,80);              //p8: bottom left
    endShape(CLOSE);

    translate(0,105);
    beginShape();       //shape3
        //top points
        vertex(15,-15);              //p1: top left
        vertex(245,-15);             //p2: top mid-left up
        vertex(245,20);              //p3: top mid-left down
        vertex(425,20);              //p4: top mid-right down
        vertex(425,-15);             //p5: top mid-right up
        vertex(690,-15);             //p6: top right up
        vertex(690,20);              //p7: top right down
        vertex(950,20);              //p8: top right-end
        
        //bottom points
        vertex(950,90);             //p1: bottom right-end
        vertex(670,90);             //p2: bottom right down
        vertex(670,60);             //p3: bottom right up
        vertex(445,60);             //p4: bottom mid-right up
        vertex(445,90);             //p5: bottom mid-right down
        vertex(230,90);             //p6: bottom mid-left down
        vertex(230,60);             //p7: bottom mid-left up
        vertex(15,60);              //p8: bottom left
    endShape(CLOSE);

    translate(0,85);
    beginShape();       //shape4
        //top points
        vertex(15,-15);              //p1: top left
        vertex(220,-15);             //p2: top mid-left up
        vertex(220,40);              //p3: top mid-left down
        vertex(455,40);              //p4: top mid-right down
        vertex(455,-15);             //p5: top mid-right up
        vertex(660,-15);             //p6: top right up
        vertex(660,40);              //p7: top right down
        vertex(950,40);              //p8: top right-end
        
        //bottom points
        vertex(950,90);             //p1: bottom right-end
        vertex(645,90);             //p2: bottom right down
        vertex(645,40);             //p3: bottom right up
        vertex(470,40);             //p4: bottom mid-right up
        vertex(470,90);             //p5: bottom mid-right down
        vertex(205,90);             //p6: bottom mid-left down
        vertex(205,40);             //p7: bottom mid-left up
        vertex(15,40);              //p8: bottom left
    endShape(CLOSE);

    translate(0,85);
    beginShape();       //shape5
        //top points
        vertex(15,-15);              //p1: top left
        vertex(195,-15);             //p2: top mid-left up
        vertex(195,20);              //p3: top mid-left down
        vertex(480,20);              //p4: top mid-right down
        vertex(480,-15);             //p5: top mid-right up
        vertex(635,-15);             //p6: top right up
        vertex(635,20);              //p7: top right down
        vertex(950,20);              //p8: top right-end
        
        //bottom points
        vertex(950,90);             //p1: bottom right-end
        vertex(620,90);             //p2: bottom right down
        vertex(620,40);             //p3: bottom right up
        vertex(495,40);             //p4: bottom mid-right up
        vertex(495,90);             //p5: bottom mid-right down
        vertex(180,90);             //p6: bottom mid-left down
        vertex(180,40);             //p7: bottom mid-left up
        vertex(15,40);              //p8: bottom left
    endShape(CLOSE);

    translate(0,85);
    beginShape();       //shape6
        //top points
        vertex(15,-15);              //p1: top left
        vertex(165,-15);             //p2: top mid-left up
        vertex(165,20);              //p3: top mid-left down
        vertex(510,20);              //p4: top mid-right down
        vertex(510,-15);             //p5: top mid-right up
        vertex(605,-15);             //p6: top right up
        vertex(605,20);              //p7: top right down
        vertex(950,20);              //p8: top right-end
        
        //bottom points
        vertex(950,90);             //p1: bottom right-end
        vertex(600,90);             //p2: bottom right down
        vertex(600,65);             //p3: bottom right up
        vertex(515,65);             //p4: bottom mid-right up
        vertex(515,90);             //p5: bottom mid-right down
        vertex(155,90);             //p6: bottom mid-left down
        vertex(155,65);             //p7: bottom mid-left up
        vertex(15,65);              //p8: bottom left
    endShape(CLOSE);

    translate(0,100);
    beginShape();       //shape7
        //top points
        vertex(15,-15);              //p1: top left
        vertex(140,-15);             //p2: top mid-left up
        vertex(140,20);              //p3: top mid-left down
        vertex(530,20);              //p4: top mid-right down
        vertex(530,-15);             //p5: top mid-right up
        vertex(585,-15);             //p6: top right up
        vertex(585,20);              //p7: top right down
        vertex(950,20);              //p8: top right-end
        
        //bottom points
        vertex(950,90);             //p1: bottom right-end
        vertex(570,90);             //p2: bottom right down
        vertex(570,65);             //p3: bottom right up
        vertex(545,65);             //p4: bottom mid-right up
        vertex(545,90);             //p5: bottom mid-right down
        vertex(120,90);             //p6: bottom mid-left down
        vertex(120,65);             //p7: bottom mid-left up
        vertex(15,65);              //p8: bottom left
    endShape(CLOSE);
}
TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

// Type your function call below
//square();

function triangle(){
forward(50); 
right(120);
forward(50);
right(120);
forward(50);
}

//triangle();

function rectangle(){
forward(80);
right(90);
forward(40);
right(90);
forward(80);
right(90);
forward(40);
}

//rectangle();

function pentagon(){
    forward(50);
    right(72);
    forward(50);
    right(72);
    forward(50);
    right(72);
    forward(50);
    right(72);
    forward(50);
}

//pentagon();

function hexagon(){
    forward(40);
    right(60);
    forward(40);
    right(60);
    forward(40);
    right(60);
    forward(40);
    right(60);
    forward(40);
    right(60);
    forward(40);
    
}

//hexagon();

function house(){
    triangle();
    square();
}

house();


stamp();
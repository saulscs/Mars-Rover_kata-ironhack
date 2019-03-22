
// Grid 
var grid = [];
for (var y=0; y<10; y++){
  grid[y] =[];
  for (var x =0; x<10; x++){
    grid[y][x] ="";
  }
}

// Rover Object Goes Here
var rover = {
  position: [0,0],
   direction: 'N',
   positionPrevious: [0,0],
   travelLog: [[0,0]]
} 
// ======================
function roverPosition (){
  grid[rover.position [0]][rover.position[1]] = rover.direction;
  if (!(rover.position[0]===rover.positionPrevious[0]&& rover.position[1]===rover.positionPrevious[1])){
    grid[rover.positionPrevious[0]][rover.positionPrevious[1]]="";
    console.log ("se borro la posicion previa")
  } else{
    console.log(" rover no se ha movido")
  }
}

// Basic Movements 
function turnLeft(rover){
  switch (rover.direction){
    case 'N':
    rover.direction = "W";
    break;
    case 'E':
    rover.direction = "N";
    break;
    case 'S':
    rover.direction ="E";
    break;
    case 'W':
    rover.direction = "S";
    break;
  }
  roverPosition();
  console.log("Rover esta en direccion" + ":" + rover.direction);
}

function turnRight(rover){
  switch (rover.direction){
    case 'N':
    rover.direction = "E";
    break;
    case 'E':
    rover.direction ="S";
    break;
    case 'S':
    rover.direction = "W";
    break;
    case 'W':
    rover.direction = "N";
    break;

  }
  roverPosition();
  console.log("Rover esta en direccion " + ":"+ rover.direction);
}

function moveForward(rover){
 rover.positionPrevious [0] = rover.position [0];
 rover.positionPrevious [1] = rover.position [1];
 switch (rover.direction){
   case 'N':
   if (rover.position [0] > 0){
     rover.position [0]--;
     move
   }
   break;
   case 'E':
   if (rover.position [1]<9){
     rover.position [1]++;
   }
   break;
   case 'S':
   if (rover.position [0]<9){
   rover.position [0]++;
   }
   break;
   case 'W':
   if (rover.position [1]>0){
     rover.position[1]--;
   }
   break;
 }
  console.log("Rover esta en" + ":" + rover.position);
}


function moveBackward(){
  rover.positionPrevious [0] = rover.position [0];
  rover.positionPrevious [1] = rover.position [1];

  switch (rover.direction){
    case 'N':
    if (rover.position [0] <9){
      rover.position [0]++;
    }
    break;
    case 'E':
    if (rover.position [1]>0){
      rover.position [1]--;
    }
    break;
    case 'S':
    if (rover.position [0]>0){
      rover.position [0]--;
    }
    break;
    case 'W':
    if (rover.position [1]<9){
      rover.position [1]++;
    }
    break;
  }   
  console.log("Rover esta en" +":"+ rover.position);   
}

//commands

function commands (string){
 for (var i=0; i< string.length; i++){
   if (string[i] === "r"){
     turnRight(rover);
   } else if (string[i]==="l"){
     turnLeft(rover);
   } else if (string[i]==="f"){
     moveForward(rover);
   }else if (string[i]==="b"){
     moveBackward(rover);
   } else {
     console.log(string[i] +"No es un comando");
   }
 }
}


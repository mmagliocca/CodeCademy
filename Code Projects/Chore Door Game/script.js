const doorImage1 = document.getElementById('door1');

const doorImage2 = document.getElementById('door2');

const doorImage3 = document.getElementById('door3');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

numClosedDoors = 3

let openDoor1
let openDoor2
let openDoor3
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById('start');
let currentlyPlaying = true;
currentStreak = 0
bestStreak = 0



const isBot = door => {
  if(door.src === botDoorPath){
    return true
  } else {return false}
}

const isClicked = door => {
  if(door.src === closedDoorPath){
    return false;
  } else {
    return true
    }
}

const streakUp = () => {
  if(currentStreak < bestStreak){
    currentStreak ++;
  }
  else{
    bestStreak ++;
    currentStreak ++;
  }
}


const playDoor = door => {
  numClosedDoors --;
  if (numClosedDoors === 0){
    gameOver('win');
    streakUp();
  } else if(isBot(door) === true){
    gameOver();
    currentStreak = 0;
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  switch (choreDoor) {
  case 0:
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
    break;
  case 1:
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    break;
  case 2:
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
    break;
  default:
    openDoor1 = botDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = botDoorPath;
    break;
  }
}

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying === true){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);}
}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying === true){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);}
}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying === true){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);}
}

startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound()}
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
  document.getElementById('box1').innerHTML = currentStreak
document.getElementById('box2').innerHTML = bestStreak
}

const gameOver = status => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
}




startRound()

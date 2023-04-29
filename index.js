// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  //returns the number of blocks given a value
  return Math.abs(42 - distance);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  }
  else if ((distance >= 400) && (distance <= 2000)) {
    return 2.56;
  }
  else if ((distance > 2000) && (distance < 2500)) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
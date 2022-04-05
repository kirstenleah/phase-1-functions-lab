// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    if (num > 42) {
       return num - 42;
    } else {
        return 42 - num;
    }
}
   
function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num)* 264;
}
  
function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const num2 = distanceTravelledInFeet(start, destination);
    if ( num2 <= 400) {
        return 0;
    } else if (num2 > 400 && num2 <= 2000) {
        return (num2 - 400) * .02;
    } else if (num2 > 2000 && num2 < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
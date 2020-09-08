const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function batteries(batteryBatches){
    let totalBatteries = batteryBatches.reduce(function(total, element){ return element + total}, 0)
// }

//https://www.freecodecamp.org/news/reduce-f47a7da511a9/
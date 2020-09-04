const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = batteryBatches.reduce((a, b) => a + b, 0)
let totalBatteries = batteryBatches.reduce(function(a, b){
  return a + b }, 0)
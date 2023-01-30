// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0



let num = 3;

// Solution One
console.log(num+num); // 6

// Solution Two
console.log(num*num-num); // 6

// Soultion Three
console.log(num/num+num/num+num/num+num); // 6

// Soultion Four
console.log(num*num/num+num); // 6

// Solution Five
console.log(num*num*num/num-num); // 6

// Solution Six
console.log(true+true+true+num); // 6


let numb = "10";

// Solution One
console.log(Number(numb)+Number(numb)); // 20

// Solution Two
console.log(+numb*numb-numb-numb-numb-numb-numb-numb-numb-numb); // 20

// Solution Three
console.log(+numb*numb/+(+numb*numb/+(+numb+Number(numb)))); // 20

// Solution Four
console.log(+(+numb*numb/(+numb+Number(numb)))*((+numb+Number(numb))/(+numb*numb/(+numb+Number(numb))))); // 20




let points = 10;

// Write Your Code Here

console.log(points/points + points / points + points / points + points); // 13

// Write Your Code Here

console.log(points/points + points / points + points / points + points - (points*points) /(points+points)); // 8;
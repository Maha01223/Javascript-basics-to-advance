// for loops

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 1; i <= 20; i++) {
//   const element = i;
//   if (i == 5) {
//     console.log("5 is Best Number");
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer Loop : ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner Loop Valve ${j} and inner valve ${i}`);
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

// let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// Break and Continous

// for (let index = 1; index <= 20; index++) {
//   const element = index;
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(element);
// }

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (index == 5) {
    console.log(`Detection of 5`);
    continue;
  }
  console.log(`valve odf i is ${index}`);
}

// let pass = "secret";
// if (pass == "secret") {
//   console.log("You know the secret password. Welcome.");
// } else {
//   console.log("You don't know the secret password. You are not welcome.");
// }

// Write a function that takes a day of the week as input and uses a switch statement to
// determine whether it's a weekday or a weekend.

// function weekdayOrWeekend(day) {
//   switch (day) {
//     case 1:
//       return "weekday";
//       break;
//     case 2:
//       return "weekday";
//       break;
//     case 3:
//       return "weekday";
//       break;
//     case 4:
//       return "weekday";
//       break;
//     case 5:
//       return "weekday";
//       break;
//     case 6:
//       return "weekend";
//       break;

//     case 7:
//       return "weekend";
//       break;
//     default:
//       return "Please enter a number between 1 and 7";
//   }
// }

// console.log(weekdayOrWeekend(6));

// factorial
// let num=5;
// let fact=1;
// for (let i=num; i>0; i--){
//     fact=fact*i;
// }
// console.log(fact);

// fibonacci series using function
// function fibonacci(num) {
//     if(num==0){
//         return [0];
//     }
//     let arr = [0, 1];
//     for (let i = 2; i < num; i++) {
//         arr.push(arr[i - 2] + arr[i - 1]);
//     }
//     return arr;
//     }
//     console.log(fibonacci(1));

// multiplication table
// let num=5;
// for(let i=1; i<=10; i++){
//     console.log(`${num} * ${i} = ${num*i}`);
// }

//  mulitplication table using do while loop
// let nums=5;
// let i=1;

// do{
//     console.log(`${nums} * ${i} = ${nums*i}`);
//     i++;
// }while(i<=10);



let count=0;
// let j=0;
// let num1=5;
// do{
//     j=num1*count;
//     console.log(j)
//     count++;
// }while(count<=10);

let day=1;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        return "Please enter a number between 1 and 7";
}

 


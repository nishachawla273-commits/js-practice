// // console.log("hello world");

// // name = ("nisha chawla");
// // console.log(name);

// // //ARTHIMATIC OPERATOR
// // let a = 5;
// // let b = 2;
// // console.log("a+b =",a+b);
// // console.log("a-b =",a-b);
// // console.log("a*b =",a*b);
// // console.log("a/b =",a/b);
// // console.log("a%b =",a%b); //modules give reminder
// // console.log("a**b =",a**b);//exponent val 5^2 = 25

// // //UNARY OPT
// // console.log("a =", a , "b = ", b);
// //  a++; // a = 6 now incremental opt, a = a+1 also use . there is a++ is a post inc which change val after and ++a pre inc change val after.
// // console.log("a = ", a);
// // a = a-2;// decrimental. same goes with this a-- and --a. 
// // console.log("a =", a);

// // //asigment opt
// // let c = 2;
// // let d = 4;
// // c +=1;
// // d -=2;
// // c *= 2;
// // // same with (/= divid), (%= moduler),(**= expo)
// // console.log("c =", c);// c is 3 now
// // console.log("d =", d); // d is 2
// // console.log("c =", c); // c is 6 bcz now c is 3 and 3^2 =6

// // //comparision opt
// // let x = 5;
// // let y = "55";
// // //x==y;// is a is equal b 
// // //x!=y;// is not equal
// // //x===y and x!==y it show equals to and data type also
// // // also we have >, >= & <, <=
// // console.log("x==y =", x==y);
// // console.log("x!=y =", x!=y);
// // console.log("x===y =", x===y);
// // console.log("x!==y =", x!==y);
// // console.log("x<y =", x<y);
// // console.log("x>=y =", x>=y);

// // //logical opt
// // let s = "yes";
// // let n = "no";
// // console.log("s say to n =", s&&n);
// // console.log("s say to n =", s||n);
// // console.log("s say to n =", !(s&&n)); // yeah ulta karta hai 

// // // conditional statments
// // //if and else
// //     let Age = Number(prompt("enter Age")); // here i use prompt with num bcz prompt just return sting val tag for input things
// // if (Age <= 49){
// //     console.log("you can come");
// // }
// //     else if (Age === 50){
// //     console.log("bro you may goooooo");
// //     }
// // else{
// //     console.log("you cann't");
// // }

// // //ternary opt is another way to write if/else

// //     let gender = "girl";
// //     gender = "she" ? "girl":"boy";
// //     console.log(gender);

// //     //alart use as popup like prompt
// //     alert("hello nisha chawla");
// //     prompt("hello");

// //     let score = prompt("enter your score :");
// //     let grade;

// //     if(score >=90 && score <=100){
// //         grade ="A";
// //     } else if (score >=70 && score <=80){
// //         grade = "B";
// //     } else if (score >= 60 && score <= 70){
// //         grade = "C";
// //     } else {
// //         grade = "fail";
// //     }
// //  console.log("your score is =",grade);
 
// // //for color theam in any web design
// // let mode = "light";
// // let color;
// // if (mode === "dark"){
// //     color = "black";
// // }
// // else{
// //     color = "white";
// // }
// // console.log(color);

// // var age1 = 24;//can be redeclaered
// // var age1 = 25;
// // var age1 = 30;
// // console.log(age1);

// // let age = 50;// cann't be redecleared but can be updated
// // age = 51;
// // age = 55;
// // console.log(age);

// // const age2 = 18; // nither decleared nor update its constant.
// // console.log(age2);

// // let hi = ("hello");
// // console.log(hi);

// // const student = {// const object ki key value ko changes kar sakty hai but const var ko ni
// //     fullname : "nisha",
// //     age : 21,
// //     cgpa : 3.8,
// //     ispssed : "true",
// // };
// // console.log(student);
// // console.log(student.age);
// // console.log(typeof student);

// //loops & string
// // // print 1 to 1000
// // for(i = 1; i<= 1000; i++){
// //     console.log("nisha chawla");
// // }

// //  // sum of 1 to 10
// //  let sum = 0;
// //  for(let i = 1; i <= 10; i++) {
// //     sum = sum + i; 
// // } 
// //     console.log("sum is = ", sum);
// //  console.log("sum ended");

// // print 1 to 1000
// for(let i = 1; i<= 5; i++){
//     console.log("i =", i);
// }

//while loop work same as for loop
// while loop runs once according to the condition 
// let i = 1;
// while(i <=10){
//     console.log("hello hey");
//     i++;
// }
//do-while loop runs atleast once in start  & in do-while we have to give semi colon in the end.
// let i = 5;
// do{
//     console.log("i =",i);
//     i++;
// }
// while(i <=10);

//for-of loop  it give each char val of string
// let str = "hello nisha";
// let size = 0; //this will give size of string in the end
// for(let i of str){ // i stand for itrator => char
//     console.log("i =",i);
//     size ++;
// }
// console.log("string size =",size);
   
// for -in loop returns keys val of obj

// let student = {
//     name : "nisha",
//     age : 21,
//     cqpa : 3.8,
//     Dept : "BSIT",
// };
//  for(let key in student) {
//     console.log("key =", key, "value = ",student[key]);// this will give val of key aslo
//  }

// print all odd num

// for (let num = 0; num <=100; num++) {
//     if(num %2 !==0)
//      // odd num
// console.log("odd-num is =",num);
// }

// game of gussing a num

let num = 35;
let yournum = Number(prompt("enter your number = "));
while (yournum !== num) {
    yournum = Number(prompt("wronge num try again :("));
}
 console.log("***you win***");
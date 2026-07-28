// function reduce the repetation/redundancy of code

function myfunction () {
    console.log("this is my first funtion");
    console.log("hey this is nisha chawla");
}
myfunction();
myfunction();

// for defining the inpute we write msg inside the func parameter(this)

function inputmsg(msg) { // parameter => input
    console.log(msg);
}
inputmsg("i love js");// print => arrguments

//sum of funtion which just print func

function sum(a ,b){
    console.log(a+b);
}
// func which return val
function sumre(a ,b){ // a and b act as local varible in func => scope means they relay inside block of {this}
    s = a + b ;
    return s ;
}
let val = sum (4 , 4);
console.log(val);

//ARROW FUNC it is a compact/small way of writing func

function sum(a,b){
    return a+b;
}
// sum code with arrowsum
//ARROW fun are part of MODERN JS
const arrowsum = (a,b) => {
    console.log(a+b);
}

function minus(a,b){
    return a-b;
}

function multi(a,b){
    return a*b;
}
const arrowmulti = (a,b) => {
    console.log(a*b);
}

function divid(a,b){
    return a/b;
}

//practice ques print and retrn vowels

function countvowels(str){
    let count = 0;
   for(let char of str){
    if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u"){
        count++;
    }
}
   // console.log(count);
   return count ;
   }
// same with arrow function

const arrowvow = (str) => {
    let count = 0;
    for (let char of str){
        if (char === "a" ||char === "e" || char === "i" || char === "o" || char === "u" ){
            count++;
        }
    }
    console.log(count);
}   

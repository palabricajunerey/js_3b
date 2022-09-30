



function checkDate(){
    document.getElementById('demo').innerHTML = Date();
}

function changeBGcolor(){
    document.getElementById('demo').style.backgroundColor = 'aquamarine';
}

function myAlert(){
    // alert('Hello! Wlcome to my Vlog!');
    confirm('Are you sure you want to delete?');
}

function del(){
    let text;

    // if(confirm('Are you sure you want to delete?') == true){
    //     text = 'You clicked OK button';
    //     document.getElementById('sample').innerHTML = '';
    // }else{
    //     text = 'You clicked CANCEL button';
    // }
    confirm('Are you sure you want to delete?') != false ? text = 'You clicked OK button' : text = 'You clicked CANCEL button'

    document.getElementById('demo').innerHTML = text;
}


console.log('sample');

//variables
//var
//let
//const


const a = true;

//   Basic Operators  
//   + Addition  
//   - Subtraction  
//   * Multiplication  
//   / Division   
//   % Modulus (remainder)  
//   ++ Increment numbers  
//   -- Decrement numbers

let name ="juan";
let lname = 'dela cruz';
let age = 20;

console.log("My name is : " + name + " " + lname + " and my age is " + age)
console.log(5+4);

console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log(6%2);

let b = 10;

if(b%2 == 0){
    console.log("The number is Even");
}else{
    console.log("The number is Odd");
}

//!yes
// Comparison Operators  
// == Equal to  
// === Equal value and equal type  
// != Not equal  
// !== Not equal value or not equal type  
// > Greater than  
// < Less than  
// >= Greater than or equal to  
// <= Less than or equal to  
// ? Ternary operator
// condition ? exprIfTrue : exprIfFalse
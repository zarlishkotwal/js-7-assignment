// alert("hello world");


// chapter 35 to 38

// Q#1

// function dateandtime(){
//  document.write(" Current Date and time: "+new Date);
//  }
//  dateandtime();

    //  Q#2

//  function fullname(){
//  var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// alert("Full name: "+ firstname + " "+lastname+"\n Welcome to our website!");
// }
//     fullname();

    // Q#3

    // function add(){
    //         var num1 = +prompt("Enter num1 value ");
    //         var num2 = +prompt("Enter num2 value ");
    //         var a = num1+num2;
    //         return a;
    //          }
    //          alert("The sum of two numbers is:"+add());


    // Q#4

    // function calculator(num1, num2, operator) {
    //         if (operator === "/")
    //             return num1 / num2;
    //         if (operator === "*")
    //             return num1 * num2;
    //         if (operator === "+")
    //             return num1 + num2;
    //         if (operator === "-")
    //             return num1 - num2;
    //         else
    //             return "Invalid Operator!";
    //     }
    //     var num1 = 7;
    //     var num2 = 7;
    //     var operator = "+";
    //     var answer = calculator(num1, num2, operator);
    //     document.write(`${num1} ${operator} ${num2} = ${answer}`)

// Q#5

    // function getSquare(num) {
    //         var square = num * num;
    //         return square;
    //       }
    //       var a =+prompt("enter num for square");
    //       alert("squares of "+ a +" argument is: "+getSquare(a));


    // Q#6

    // var a =+prompt("Enter your number for factorial");
    // var ans = a;
    // function fact(a){
    //     if (a==0||a==1){
    //         return 1;
    //     }
    //     else{
    //         for(var i =a-1;i>=1;i--){
    //             ans = ans*i;
    //         }
    //         return ans;
    //     }
    // }
    // var c = fact(a);
    // console.log("factorial of number is: "+c);
 

    // Q#7

//     function num(start,end){   
//             for(var i=start;i<=end;i++){
//                 document.write(i+"<br>");
//             }
//         }
//         var a=+prompt("enter starting number:");
//         var b=+prompt("enter ending number:");
//         num(a,b);

//    Q#8   

// var perp = +prompt("Enter Perpendicular value") * 2;
// var hypo;
// function calculateHypo(perp) {
//     function calculateSqr(perp) {
//         return perp * 2;
//     }
//     return hypo = 10 + perp;
//     calculateSqr()
// }
// document.write("Hypoteneous is:" + " " + calculateHypo(perp))

// Q#9

// var width = +prompt("Enter Width");
// var height = +prompt("Enter Hight");
// function areaoftriangle(width,height) {
//     var area = width*height;
//     return area;
// }
// document.write("Area Of Triangle is: ");
// document.write(areaoftriangle(width,height));

// Q#10

// function isPalindrome(word) {
//         var reversedWord = "";
//         word = word.toLowerCase();
//         var letters = word.split("");
//         for (let index = (word.length - 1); index >= 0; index--) {
//             reversedWord = reversedWord + letters[index];
//         }
//         return word === reversedWord;
//     }
//     var word = "madam";
//     var result = isPalindrome(word);
//     if (result) {
//         document.write(`${word} is a palindrome.`);
//     }
//     else {
//         document.write(`${word} is not a palindrome.`);
//     }

// Q#11

// function titleCase(str) {
//     var arr = str.split(" ");
//     var result = arr.map(
//         function (val) {
//             return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
//         }
//     )
//     return result;
// }

// var string = titleCase("the quick brown fox").join(" ");
// document.write("EXAMPLE STRING:" + " " + "the quick brown fox" + "<br>")
// document.write("EXPECTED OUTPUT:" + " " + string )


// Q#12

 // function longestString(str) {
    //         var arr = str.split(" ");
    //         var result = "";
    //         for (var i = 0; i < arr.length; i++) {
    //             var currenItem = arr[i];
    //             if (currenItem.length > result.length) {
    //                 result = arr[i]
    //             }
    //         }
    //         return result;
    //     }
    //     var string1 = longestString('Web Development Tutorial');
    //     document.write("Example String:" + " " + "Web Development Tutorial" + "<br>")
    //     document.write("Expected Output:" + " " + string1 + "<br><br><br>")

// Q#13

// function countLetter(string, letter) {
//         var count = 0;
//         string = string.toLowerCase();
//         letter = letter.toLowerCase();
//         var letters = string.split("");
//         for (const l of letters) {
//             if (letter === l) {
//                 count++;
//             }
//         }
//         document.write(`Input: ${string}<br />`);
//         document.write(`'${letter}' occurrences: ${count}`);
//     }
//     countLetter("hello hello hello", "e");

// Q#14

// var radius = +prompt("Enter radius Number");
// function calcCircumference(radius) {

//     var cirFer = (2*3.14)*radius;
//     return cirFer;
// }
// document.write("Circumference of circle :  ");
// document.write(calcCircumference(radius));


// function calcArea(radius) {
//     var area = 3.14*(radius*radius);
//     return area;
// }
// document.write("<br>Area of circle:  ");
// document.write(calcArea(radius))

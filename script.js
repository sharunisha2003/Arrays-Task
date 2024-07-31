

// function validateEmail() {
//     let email = document.getElementById('email').value;
//     // const errorMessage = document.getElementById('error-message');
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (emailPattern.test(email)) {
//        alert('Email is valid');
//     } else {
//        alert('Please enter a valid email address');
//     }
// }
// const numbers=[1,2,3,4,5,6];
// numbers.forEach(function(number){
//     console.log(numbers);
// });

// const fruits=['apple','cherry','grapes']
// fruits.forEach(function(fruit,index){
//     console.log(index+':'+fruit);
// })

// const numbers=[1,2,3,4,5,6];
// const doubled=numbers.map(function(number){
// return number*2});
// console.log(doubled);

// const num = [1, 2, 3, 4, 5, 6];
// const doubled = num.map(number => number * 2);
// console.log(doubled);

// let map=new Map();
// map.set('name','Angel');
// map.set('age',21);
// map.set(true,'boolean key');
// map.delete('age');
// console.log(map.has('age'));
// console.log(map.size);
 
// let arr=[1,2,3,4,5];
// let mySet=new Set(arr)
// console.log(mySet);

// let set=new Set();
// set.add(1);
// set.add(5);
// set.add('Hello');
// set.add({a:1,b:2});
// set.delete({a:1,b:2});
// console.log(set.has({a:1,b:2}));

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     });
//     });

// $(document).ready(function(){
//     $("button").click(function(){
//         $(".test").hide();
//     });
//     });
        
// $(document).ready(function(){
//     $("button").click(function(){
//          $("*").hide();
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//          $(":button").hide();
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//          $(this).hide();
//      });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//          $(".test").toggle();
//      });
// });

// Array Manipulation
   
   let array = [1, 2, 3];
   array.push(4);
   array.unshift(0);
   array.pop(); 
   array.shift();
   console.log(array);
   
// Array Searching
let arr = [1, 2, 3, 4, 5, 4, 5];
let indexOf3 = arr.indexOf(3);
let firstElementGreaterThan2 = arr.find(element => element > 2);
let includes4 = arr.includes(4);
console.log('Index of 3:', indexOf3);

// Array Filtering
   
   let ar= [1, 2, 3, 4, 5];
   let filteredArray = array.filter(element => element > 2);
   console.log(filteredArray);

// Array Mapping
   let arr1= [1, 2, 3, 4];
   let mappedArray = arr1.map(element => element * 2);
   console.log(mappedArray);

// Array Sorting
   let ar1= [3, 1, 4, 2, 5];
   ar1.sort(); 
   ar1.reverse(); 
   console.log(ar1);

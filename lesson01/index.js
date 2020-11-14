// es6,

// boolean, 
// number, 
// string, 

// object, array, 

// undefined, null, symbol,

// var x = 19; 
// stack memory //-heap, 
// let x = 9;
// let y = x;
// y = 10;
// console.log(x);

// let x = {name: 'Nhat'}

// let y = x;

// y.name = 'Toan';

// console.log(x);

// 3, primitive type, 2. reference type, 3. pointer

// int x; // declare
// x = 9; // asign
// let x

// x = 9;
// var x //
// console.log(x);
// let x = 9;
// /// hoisting, ko duoc redeclare
// let x;
// for(x = 0; x < 10; x++){
//     console.log(x);
// }
// console.log('40', x);
//
// {
//     let x = 90;
// }

// let x = 9;

// x = 10;
// console.log(x);
// let x = 20;
// function getVal(){
//     x = 40;
//     x = 10;    
//     console.log(x);
// }
// console.log(x);

// console.log(getVal());

// function getVal(){

//     return 39;
// }
// var getVal = function () {
//     return 49;
// }
// function getX(x, y){
//     return x+y;
// }

// const getX = (x, y) => x+y;
// const getX = x => x+9;
// function GetX(){
//     this.color = 'Yellow';
//     setTimeout(() => {
//         console.log(this.color);
//     }, 1000)
// }
// {}
// let color = new GetX();

// global.console.log('hello');
// window.alert('hi')

// closure.
// const getVal = x => y => z => x+y+z+9;
// getVal(5)(6)(7);
// object destructuring;
// let person = {
//     name: 'ggaweg',
//     age: 32434
// }

// let name = 'myname';

// let {name: myName, age, myAdrress} = person;
// let myName = person.name;

// let color = 'yello';
// let address = 'Vietname';

// let ObjectSentToserver = {
//     color,
//     address
// }


// array destructuring
// let arr = ['vietname', 'red', 20];

// let country = arr[0];
// let color = arr[1];
// let age = arr[2];
// let [country, color, age, height] = arr;
// // let country = arr[0];
// console.log(height);

// let height = arr[3];
// console.log(height);

// let [country, _, age] = arr;
// console.log(age);

// ... //
// spread, rest.
// rest 
// function add(...args){
//     let rs = 0;
//     for(let x = 0; x < args.length; x++){
//         rs +=args[x];
//     }
//     return rs
// }

// add(1,2,3); // 1+2+3;
// add(1,2,3,4); // 1+2+3+4;

// let product = {
//     name: 'Iphone',
//     price: 2000,
//     category_id: {
//         name: 'gaegae'
//     }
// }

function getProduct(product){
    // product.name = 'Samsung';
    // product.price = 1200;
    // return product;
    return {
        ...product,
        name: 'Samsung',
        price: 1200,
        category: {
            ...product.category,
            name: 'gaegaeg'
        }
    }
}

// let newProduct = getProduct(product);

// console.log(newProduct);
// console.log('154', product);

// shalow copy, deep copy.

// let myProduct = JSON.price(JSON.stringify(product)); // deep copy
// let myProduct = {...product, newProp: 'gaegawg'}; // first level

// myProduct.name = 'Samsung';
// console.log(product);
// higher order function with array.

// map, filter, reducer, sort;  / loop each element of array
let arr = [1, 9, 200, 3 , 4, 15];

// arr = arr.map((item) => {
//     return item*2;
// });

// console.log(arr);

// arr = arr.filter(item => item % 2 != 0);
// console.log(arr);

// arr = arr.sort((a, b) => a - b); // asi

// console.log(arr);
// arr = arr.reduce((curr, acc)=> {
//     return curr + acc;
// }, 0)

// console.log(arr);
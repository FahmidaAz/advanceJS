const numbers = [2,4,5,3];
const newNum =[];

for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result =  element * element;
    newNum.push(result);
}
console.log(newNum);


const num = [6,5,4];
function square (element){
    return element * element;
}
const result2 = num.map(square);
console.log(result2);

//arrow function and map
const nums =[9,7,6];

const square2 = nums => nums * nums;

const result3 = nums.map(square2);
console.log(result3);

//OR

const result4 = nums.map(element => element * element * element);

console.log(result4);



//filter

const bigNum = nums.filter(element => element>6);
console.log(bigNum);

//find

const smallNum = nums.find(element => element<9);
console.log(smallNum);
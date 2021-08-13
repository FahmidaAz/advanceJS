const numbers = [2,4,5,3];
const newNum =[];

for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result =  element * element;
    newNum.push(result);
}
console.log(newNum);
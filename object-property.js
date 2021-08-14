const student =[
    {id:21, name:"Sunny"},
    {id:31, name:"Halim"},
    {id:41, name:"Nila"},
    {id:11, name:"Sweety"}
];


const names = student.map(stu => stu.name);
const ids = student.map(stu => stu.id);
// console.log(names);
const firstLetter = student.filter(function(stu){
    const name = stu.name;
    if(name.charAt(0) == "S"){
        return console.log(name);
    }
    });

    const failtuStudent = student.filter(stu => stu.id>30);
     console.log(failtuStudent);


// console.log(ids);

//arrow function

const first = student.filter(stu => stu.name.charAt(0)=="N");
console.log(first);
let myName:string = "Sammy Chung";
// let myName = "Sammy Chung"; 相同寫法
let age = 20;
let hasPet = false ;
let nothing = undefined;
let nothingLiterally = null;

let info ={
    name: "Sammy.Chung",
    age: 25,
    hasPet: false,
}

let someone ={
    knows:undefined,
    identity:null,
}


let numbers = [1,2,3,4,5];
let mappedNumbers = numbers.map(num => num*2);
// let mappedNumbers = numbers.map(function(num){num*2}) 映射

mappedNumbers.forEach(element => {
   console.log("element:"+element); 
});


enum WeekDay {Sunday, Monday,Tusday, Wensday, Thursday, Friday, Sunay};


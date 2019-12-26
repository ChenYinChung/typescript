/* 介面 */
enum Gender {Male , Female,Other};

// 物件
interface UserInfo{
    id: number;
    name: string;
    birth: Date;
    interests: string[];
    gender: Gender;
    
    address:{
        country: string;
        city: string;
        postalCode: string;
    }

    logInfo(message:string) : void;

}

interface UpdateRecord {
    (id:number, newRecored: UserInfo):void
}


// interface Person
interface Person{
    name: string;
    age: number;
    hasPet: boolean;
}

// 使用介面
const maxwell: Person={
    name:"MaxWell",
    age:24,
    hasPet:false,
};

const matin: Person={
    name:"matin",
    age:25,
    hasPet:false,
};

const leo: Person={
    name:"leo",
    age:26,
    hasPet:false,
};

function printPersonInfo(person: Person){
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`pet: ${person.hasPet}`);
}

printPersonInfo(maxwell);
printPersonInfo(matin);
printPersonInfo(leo);


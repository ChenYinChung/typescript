"use strict";
/* 介面 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
;
// 使用介面
var maxwell = {
    name: "MaxWell",
    age: 24,
    hasPet: false,
};
var matin = {
    name: "matin",
    age: 25,
    hasPet: false,
};
var leo = {
    name: "leo",
    age: 26,
    hasPet: false,
};
function printPersonInfo(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("pet: " + person.hasPet);
}
printPersonInfo(maxwell);
printPersonInfo(matin);
printPersonInfo(leo);

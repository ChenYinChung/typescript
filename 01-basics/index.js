"use strict";
var myName = "Sammy Chung";
// let myName = "Sammy Chung"; 相同寫法
var age = 20;
var hasPet = false;
var nothing = undefined;
var nothingLiterally = null;
var info = {
    name: "Sammy.Chung",
    age: 25,
    hasPet: false,
};
var someone = {
    knows: undefined,
    identity: null,
};
var numbers = [1, 2, 3, 4, 5];
var mappedNumbers = numbers.map(function (num) { return num * 2; });
// let mappedNumbers = numbers.map(function(num){num*2}) 映射
mappedNumbers.forEach(function (element) {
    console.log("element:" + element);
});
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tusday"] = 2] = "Tusday";
    WeekDay[WeekDay["Wensday"] = 3] = "Wensday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Sunay"] = 6] = "Sunay";
})(WeekDay || (WeekDay = {}));
;

"use strict";
var CustomerPersonInfo = /** @class */ (function () {
    function CustomerPersonInfo(name, age, hasPet) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    CustomerPersonInfo.prototype.printInfo = function () {
        console.log("\n            Name: " + this.name + "\n            Age: " + this.age + "\n            HasPet:" + this.hasPet + "\n        ");
    };
    return CustomerPersonInfo;
}());
var customerPersonInfo = new CustomerPersonInfo("Sammy Chung", 24, true);
customerPersonInfo.printInfo();
var CachMachine = /** @class */ (function () {
    function CachMachine() {
        // default constructor is empty
        this.users = [
            { account: "Sammy", password: "123qwe", money: 123456 },
            { account: "Hellen", password: "123qwe", money: 98765 },
            { account: "Phoebe", password: "aa123", money: 34567 },
            { account: "Hank", password: "bb456", money: 34567 },
        ];
    }
    CachMachine.prototype.signIn = function (account, password) {
        for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.account === account && user.password === password) {
                this.currentUser = user;
                break;
            }
        }
        if (this.users === undefined) {
            throw new Error('User not found');
        }
    };
    CachMachine.prototype.signOut = function () {
        this.currentUser = undefined;
    };
    CachMachine.prototype.deposite = function (amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        }
        else {
            throw new Error("No user signed in");
        }
    };
    CachMachine.prototype.withdraw = function (amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        }
        else {
            throw new Error("No user signed in");
        }
    };
    CachMachine.prototype.printAccountInfo = function () {
        if (this.currentUser === undefined) {
            console.log("No User found!!");
        }
        else {
            console.log("\n            Current User: " + this.currentUser.account + "\n            Money: " + this.currentUser.money + "\n           ");
        }
    };
    return CachMachine;
}());
var machine = new CachMachine();
machine.signIn("Sammy", "123qwe");
machine.printAccountInfo();
machine.signOut();
machine.signIn("no", "no");
machine.printAccountInfo();

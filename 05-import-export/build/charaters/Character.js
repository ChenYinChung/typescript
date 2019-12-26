"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role) {
        this.name = name;
        this.role = role;
    }
    Character.prototype.introduce = function () {
        console.log("\n          Hi, I'm " + this.name + " the " + this.role + "\n        ");
    };
    return Character;
}());
exports.default = Character;

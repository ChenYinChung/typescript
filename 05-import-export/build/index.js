"use strict";
/**
 *  1.tsc —init
 *  2.enable tsconfig.json output dir
 *  3.npm init -y
 *  4.npm install concurrently nodemon -—save-dev
 *  5. package.json
 *    "scripts": {
        "start:watch": "tsc -w",
        "start:run": "nodemon build/index.js",
        "start": "concurrently npm:start:*"
      },
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("./charaters/Role"));
var Character_1 = __importDefault(require("./charaters/Character"));
var swordsman = new Character_1.default("Sammy Chung", Role_1.default.Swordsman);
swordsman.introduce();

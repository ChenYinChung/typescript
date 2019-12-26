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

 import Role from './charaters/Role';
 import Character from './charaters/Character';

 const swordsman = new Character("Sammy Chung",Role.Swordsman);
 swordsman.introduce();
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

 //const $btn = document.getElementById("click-me-btn");
 const $btn = <HTMLButtonElement>(
    document.getElementById('click-me-btn')
 );

//  const $counter = document.getElementById("count");
const $counter =<HTMLSpanElement>(
     document.getElementById('count')
)

 let count = 0 ;

 $btn.addEventListener('click',() => {
   count++;
    console.log('You Clicked me');
    $counter.innerText = count.toString();
 });
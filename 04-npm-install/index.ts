/**
 *  1.tsc —init
 *  2.enable tsconfig.json output dir  
 *  3.npm init -y
 *  4.npm install concurrently nodemon —-save-dev
 *  5. package.json
 *    "scripts": {
        "start:watch": "tsc -w",
        "start:run": "nodemon build/index.js",
        "start": "concurrently npm:start:*"
      },
 */

 
// user info
type TUserAccount = {
    account: string;
    password: string;
    money: number;
}

// interface 
interface ICachMachine {
    deposite(amount:number): void;
    withdraw(amount:number):void;
    users: TUserAccount[];
    currentUser: TUserAccount | undefined;
    signIn(account:string , password:string): void;
    signOut(): void;
}

class CachMachine implements ICachMachine{

    // default constructor is empty
    users: TUserAccount[] = [
        {account:"Sammy",password:"123qwe",money:123456},
        {account:"Hellen",password:"123qwe",money:98765},
        {account:"Phoebe",password:"aa123",money:34567},
        {account:"Hank",password:"bb456",money:34567},
    ];

    currentUser: TUserAccount | undefined;

    signIn(account:string,password:string):void{
     
        for(let i=0 ;i < this.users.length;i++){
            const user = this.users[i];
            if(user.account===account && user.password===password ){
                this.currentUser = user;
                break;
            }
        }
        
        if(this.users===undefined){
            throw new Error('User not found');
        }
    }

    signOut():void{
        this.currentUser = undefined;
    }

    deposite(amount:number):void{
        if(this.currentUser!==undefined){
            this.currentUser.money+=amount;
        }else{
            throw new Error("No user signed in");
        }
    }

    withdraw(amount:number):void{
        if(this.currentUser!==undefined){
            this.currentUser.money-=amount;
        }else{
            throw new Error("No user signed in");
        }
    }

    printAccountInfo(){
        if(this.currentUser === undefined){
            console.log("No User found!!");
        }else{
            console.log(`
            Current User: ${this.currentUser.account}
            Money: ${this.currentUser.money}
           `);
        }

    }
}


const machine = new CachMachine();
machine.signIn("Sammy","123qwe");
machine.printAccountInfo();

machine.signOut();
machine.signIn("no","no");
machine.printAccountInfo();

machine.signIn("Hellen","123qwe");
machine.printAccountInfo();

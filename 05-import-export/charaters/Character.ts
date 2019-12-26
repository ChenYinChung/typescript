import Role from './Role';

export default class Character {
    constructor(
        public readonly name:string,
        public readonly role:Role,
    ){}

    public introduce(){
        console.log(`
          Hi, I'm ${this.name} the ${this.role}
        `);
    }
}
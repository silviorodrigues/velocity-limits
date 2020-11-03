export class Customer {
  readonly id: string;
  
  public constructor(id: string) {
    this.id = id;
  }

  public isInstantiaed() {
    console.log(`Id ${this.id} is already instanced`);
  }
}
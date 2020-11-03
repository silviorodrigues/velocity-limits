import { File } from './File';
// import { Customer } from './Customer';

const file = new File('input.txt');
const transactions = file.read();

transactions.forEach(i => console.log(i))
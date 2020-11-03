import { readFileSync } from 'fs';

export class File {
  readonly inputPath: string;
  
  public constructor(input: string) {
    this.inputPath = input;
  }

  public read() {
    const input = readFileSync(this.inputPath, 'utf-8');

    return input.split('\n').map(line => line && JSON.parse(line));
  }
}
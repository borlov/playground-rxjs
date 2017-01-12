import { Observable } from "rxjs";

let numbers = [1, 5, 10];
const source = Observable.from(numbers);

console.log(source);
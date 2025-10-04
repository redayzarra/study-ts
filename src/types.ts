// Declaring basic types for numbers, strings, and booleans
let sales: number = 123_456_789;
let course: string = "TypeScript";
let isPublished: boolean = true;

// Typescript is able to infer that these variables are numbers / strings
let revenue = 345;
let quote = "Hello";

// This variable is an "Any" type but this is not a good thing, avoid this.
let level;
level = 1;
level = "abc";

// You do have to explicitly state that something is an "Any" type in functions, don't do this.
function render(document: any) {
  console.log(document);
}

// Compiler assumes that we accept numbers or strings since we didn't define it.
let numbers = [1, 2, 3, "a"];

// After defining a variable as a number[], we get all the benefits of type safety
let onlyNumbers: number[] = [];
onlyNumbers.forEach((number) => number);

// You can define more complex types using "tuples" but they are mutable...
// this means that you can actually still do push operations on them
let user: [number, string] = [1, "ReDay"];
user.push(1);

// If you want to correctly define an immutable tuple then use this:
let userId: readonly [number, string] = [2, "Ashley"];

// We can also create enums and define the keys & values in there
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize: Size = Size.Medium;
console.log(mySize)

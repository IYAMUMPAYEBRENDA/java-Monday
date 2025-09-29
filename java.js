// variables 
let name = "John";
let age = 25;
console.log("Name:", name);
console.log("Age:", age);

// 2. Simple arithmetic operations
let num1 = 10;
let num2 = 5;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// 3. Function to greet user
function greet(userName) {
    return "Hello, " + userName + "!";
}
console.log(greet(name));

// 4. Array operations
let fruits = ["Apple", "Banana", "Cherry"];
console.log("First fruit:", fruits[0]);
fruits.push("Orange");
console.log("All fruits:", fruits);

// 5. Object example
let student = {
    name: "Alice",
    grade: "A",
    age: 20
};
console.log("Student Name:", student.name);
console.log("Student Grade:", student.grade);

// 6. Conditional statement
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 7. Loop example
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
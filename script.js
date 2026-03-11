//Task-1

//Employee Salary Analysis System

let employees = [
 {name:"Ravi", salary:25000},
 {name:"Meena", salary:60000},
 {name:"Arun", salary:45000},
 {name:"Priya", salary:80000},
 {name:"John", salary:30000}
]
//1)Get employees whose salary is greater than 40000.


let emp = employees.filter((current,index,total)=>{
    return current.salary > 40000
})
console.log("greater than 40000 : ",emp);

//2)Find the first employee whose salary is above 70000.

let newemp = employees.find((current,index,total)=>{
    return current.salary > 70000
})
console.log("salary is above 70000 : ",newemp);

//3)Calculate the total salary of all employees.

let overallsalary = employees.reduce((acc,current,index,total)=>{
    return acc+current.salary
},0)
console.log("Total salary: ",overallsalary);

//4)Check if any employee salary is below 20000.

let check = employees.some((current,index,total)=>{
    return current.salary < 20000
})
console.log("salary is below 20000: ",check);

//5)Check if all employees salary are above 20000.

let check1 = employees.every((current,index,total)=>{
    return current.salary > 20000
})
console.log("salary are above 20000: ",check1);

//Task-2 

// E-commerce Product Search

let products = ["laptop","mobile","tablet","smartwatch","mobile"]

// 1)Check if "tablet" exists 

console.log(products.includes("tablet"));

//2) Find the first index of "mobile".

console.log(products.indexOf("mobile"));

//3) Find the last index of "mobile".

console.log(products.lastIndexOf("mobile"));

//4)Check if "camera" exists.

console.log(products.includes("camera"));


//Task-3

//Website Username Formatter

//A user enters username with spaces.

let username = "   naveenkumar   "

//1) Remove extra spaces.
let name1 = username.trim()
console.log(name1);

//2)Convert the username to uppercase.

console.log(name1.toUpperCase());

//3)Convert the username to lowercase.

console.log(name1.toLowerCase());

//4)Extract only first 6 characters of the username.

console.log(name1.slice(0,6));

//Task-4

//Game Platform Data Processing

let games = ["cricket","football","hockey","tennis"]

//1)Print all games using forEach().
games.forEach((current,index,total)=>{
    console.log(current);
    
})

//2) using map()

let gamesarr = games.map((current,index,total)=>{
    return "Game : "+current
})
console.log(gamesarr)

//Task-5

// Student Marks Analyzer Concepts: sort(), reverse()

let marks = [45,90,23,67,88,12]

//1)Sort marks ascending order.

let newsort = marks.sort((a,b)=>{
    return a - b
})
console.log(newsort);

//2)Sort marks descending order.

let newsort1 = marks.sort((a,b)=>{
    return b - a
})
console.log(newsort1);

//3) Reverse the marks array.

let marks1 = [45,90,23,67,88,12]
let reverseval = marks1.reverse()
console.log(reverseval);


//Task-6

//Salary Report Generator Concepts: reduce()

let salaries = [10000,20000,30000,40000]

// 1)Find total salary paid by company.

let totalsalary = salaries.reduce((acc,current,index,total)=>{
    return acc + current
},0)
console.log(totalsalary);

//2)Find average salary

let averagesalary = totalsalary / salaries.length
console.log("Average Salary:", averagesalary)


//Task-7

//URL Processor

let url = "www-stackly-com"

//1)Convert the string into array using split().

console.log(url.split("-"));

//Task-8

//Job Role Modifier Concepts: replace(), startsWith(), endsWith()

let role = "python developer"

// 1)Replace python → javascript

console.log(role.replace("python","javascript"));

//2)Check if role starts with "python"

console.log(role.startsWith("python"));

//3)Check if role ends with "developer"

console.log(role.endsWith("developer"));

//Task-9

//Nested Array Data Cleanup Concepts: flat()

let data = [1,2,[3,4,[5,6]]]

// 1)Flatten the array to

let flatval = data.flat(Infinity)
console.log(flatval);

//Task-10

//Sports Data Slice Concepts: slice()

let sports = ["cricket","football","tennis","hockey","golf"]

//1) Extract football and tennis

let sliceval = sports.slice(1,3)
console.log(sliceval);

// 2) Extract first 3 sports

let sliceval1 = sports.slice(0,3)
console.log(sliceval1);




































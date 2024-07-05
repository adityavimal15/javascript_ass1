console.log("Question 1")
let totalValue=2000;
let discountPercentage=20;
let result=totalValue-((discountPercentage/100)*totalValue);
console.log(`The final price after discount is : Rs. ${result}`);


console.log("\n")
console.log("Question 2")
let username="admin";
let password="12345";
if(username="admin",password="12345"){
    console.log("Login Successful")
}
else{
    console.log("Invalid User")
}


console.log("\n")
console.log("Question 3")
let rupee=56;
console.log(`The amount of rupee which required to convert is: ${rupee}`)
let Dollar=1/82;
let inDollar=rupee*Dollar;
console.log(`${rupee} INR is ${inDollar} USD`)


console.log("\n")
console.log("Question 4")
let numchild=2;
let pricechild=100;
let farechild=numchild*pricechild;
let numadult=1;
let priceadult=150;
let fareadult=numadult*priceadult;
let numsenior=1;
let pricesenior=120;
let faresenior=numsenior*pricesenior;
let totalfare=farechild+fareadult+faresenior;
console.log(`The total ticket price is ${totalfare}`)


console.log("\n")
console.log("Question 5")
let packageType = 'standard';
switch(packageType) {
    case 'standard':
        console.log(`Estimated delivery time for ${packageType} package: 3-5 days`);
        break;
    case 'express':
        console.log(`Estimated delivery time for ${packageType} package: 1-2 days`);
        break;
    case 'overnight':
        console.log(`Estimated delivery time for ${packageType} package: next day`);
        break;
    default:
        console.log(`Estimated delivery time for ${packageType} package: not available`);
        break;
}


console.log("\n")
console.log("Question 6")
let userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
};
if (typeof userInfo.name !== 'string') {
    console.log("Name should be a string.");
}

if (typeof userInfo.email !== 'string') {
    console.log("Email should be a string.");
}

if (typeof userInfo.age !== 'string') {
    console.log("Age should be a number.");
}


console.log("\n")
console.log("Question 7")
let shoppingList = ["Orange", "Banana", "Watermelon", "Mango", "Cheery"];
for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}


console.log("\n")
console.log("Question 8")
for(let i=0;i<=10;i++){
    console.log(`${i}`)
}


console.log("\n")
console.log("Question 9")
const array=[1,2,999,56,"Mithun",1234,"PW"]
let firststring=false;
for(i=0;i<=array.length;i++){
    if(typeof array[i]== `string`){
        console.log(`Found the first string ${array[i]}`)
        firststring=true;
        break;
    }
}

console.log("\n")
console.log("Question 10")
let arra=[1,2,-3,5,-9,-8,-7,7]
for(i=0;i<=arra.length;i++){
    if(arra[i]>0){
        console.log(`${arra[i]}`)
    }
}
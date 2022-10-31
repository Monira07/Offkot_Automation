/*x = 5;
y = 6;
z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;*/

//Function
/*function person(names)
{
    return names + "is my name";
}

//person("Mithi");
document.getElementById("demo").innerHTML = person("Mithi");*/

/*function person(names)
{
    console.log (names + " is my name");
}

function details(age, section)
{
    console.log("Age =" + age + "section =" + section);
}
details(24, "A");
person("Mithi");
console.log("hi");*/

//Object
/*const car = {
name: "Fiat",
Model: 505,
Weight: "280kg",
color: "red",
start: function()
{
    console.log("Car has started");
    this.drive();
},

drive: function()
{
    console.log("Car is driving");
},
};

console.log(car.Model);
car.start();*/

//Array
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
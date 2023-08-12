let arr = [
  { id: 1, name: "john", age: 18, profession: "developer" },
  { id: 2, name: "jack", age: 20, profession: "developer" },
  { id: 3, name: "karen", age: 19, profession: "admin" },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  let developer = arr.filter((item) => item.profession == "developer");
  developer.map((developer) => console.log(developer));
}

function addData() {
  //Write your code here, just console.log
  let New_Entry = { id: 4, name: "susan", age: 20, profession: "intern" };
  arr.push(New_Entry);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item) => item.profession != "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let New_array = [
    { id: 4, name: "Raju", age: 35, profession: "Teacher" },
    { id: 5, name: "Sarvesh", age: 25, profession: "Doctor" },
    { id: 6, name: "Amit", age: 30, profession: "VFX artist" },
  ];
  let both_arrays = arr.concat(New_array);
  arr = both_arrays;
  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log("Consoling Array Variable", arr);
  // Over here I can directly access the variable.
}

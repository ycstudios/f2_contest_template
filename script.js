/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.map((employee) => {
    if (employee.profession === "developer") {
      return employee;
    }
  })
  
  const dev=developers.filter(employee => employee !== undefined);
  
  console.log(dev);
}

function PrintDeveloperbyForEach() {

  const developers = [];
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  console.log(developers)
}

function addData() {
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  };
  
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const filteredArray = arr.filter((employee) => employee.profession !== "admin");
      console.log(filteredArray);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "yash", age: "20", profession: "developer" },
    { id: 6, name: "asus", age: "20", profession: "manager" },
    { id: 7, name: "tuf", age: "25", profession: "developer" }
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}

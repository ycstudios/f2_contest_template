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
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
}

function removeAdmin() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}

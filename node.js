// let http = require("http"); // require шаардлагатай гаднс сан оруулж ирэхэд ашиглах буюу өөр хүний код , ( http )-ын код ашиглая гсн үг
// http
//   .createServer(function (req, res) {
//     // createServer=function uusgjin req,res zaawl 2 utga orj irne
//     res.writeHead(200, { "Content-Type": "text/plain" }); //res dtro res.writeHead end gd 2 functionto
//     res.end("Hello World!");
//   })
//   .listen(8080);

// const todos = ["ger", "hool"]; oor files san duudah zaavar //
// module.exports = todos; // undsen function dre
// let todos=require("./db.js")

// const http = require("http");
// const { faker } = require("@faker-js/faker");
// // const randomName = faker.person.fullName();
// function createRandomStudent() {
//   return {
//     _id: faker.string.uuid(),
//     avatar: faker.image.avatar(),
//     birthday: faker.date.birthdate(),
//     email: faker.internet.email(),
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     sex: faker.person.sexType(),
//     grades: faker.number.int({ min: 0, max: 100 }),
//   };
// }
// //
// http
//   .createServer(function (req, res) {
//     // const fakeUser = createRandomStudent();
//     const students = [];
//     for (let i = 0; i < 10; i++) {
//       const newStudent = createRandomStudent();
//       students.push(newStudent);
//     }
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(students));
//   })
//   .listen(8888);

// const http = require("http");
// const { faker } = require("@faker-js/faker");
// const randomName = faker.person.fullName();
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(randomName.toString());
//   })
//   .listen(8080);

// const http = require("http");
// const { faker } = require("@faker-js/faker");
// // const randomName = faker.person.fullName();
// function createRandomEmployess() {
//   return {
//     birthday: faker.date.birthdate(),
//     email: faker.internet.email(),
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     sex: faker.person.sexType(),
//     grades: faker.number.int({ min: 0, max: 100 }),
//     ages: faker.number.int({ min: 18, max: 25 }),
//   };
// }
// //
// http
//   .createServer(function (req, res) {
//     // const fakeUser = createRandomStudent();
//     const employess = [];
//     for (let i = 0; i < 10; i++) {
//       const newEmployess = createRandomEmployess();
//       employess.push(newEmployess);
//     }
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(employess));
//   })
//   .listen(7777);

// const http = require("http");
// const { faker } = require("@faker-js/faker");
// http
//   .createServer((req, res) => {
//     const age = faker.number.int({ min: 15, max: 80 });
//     const randomName = faker.person.fullName();
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ name: randomName, age: age }));
//   })
//   .listen(7777, () => {
//     console.log("Server is running on port 7777...");
//   });
const http = require("http");
// const todos = require("./test.js");
const moment = require("moment");

function test(req, res) {
  const birthdate = "2001-01-20";
  const formattedDate = moment(birthdate).fromNow();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(formattedDate.toString());
}
http.createServer(test).listen(8080);

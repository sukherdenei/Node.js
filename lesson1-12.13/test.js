// // fake comments, data , employess , title views comments too

// const http = require("http");
// const { faker } = require("@faker-js/faker");
// function createRandomEmployess() {
//   return {
//     firstName: faker.person.firstName(),
//     gender: faker.person.genderType(),
//     grades: faker.number.int({ min: 0, max: 100 }),
//   };
// }
// http
//   .createServer(function (req, res) {
//     const employess = [];
//     for (let i = 0; i < 10; i++) {
//       const newEmployess = createRandomEmployess();
//       employess.push(newEmployess);
//     }
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(employess));
//   })
//   .listen(8080);

// const http = require("http");
// const { faker } = require("@faker-js/faker");
// const randomName = faker.person.fullName();
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(randomName.toString());
//   })
//   .listen(8080);

let todos = ["mashin", "bair", "mongo"];
module.exports = todos;

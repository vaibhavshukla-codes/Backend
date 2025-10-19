const fs = require('fs'); // cjs

// writeFile
// appendFile
// copyFile
// rename
// unlink

// file modules:-

// fs.writeFile("hey.txt", "my name is vaibhav", (err) => {
//     if (err) console.log(err);
//     else console.log("done");
// });

// fs.appendFile("hey.txt", " and i live in lucknow with scooter", (err) => {
//     if (err) console.log(err.message);
//     else console.log("done");
// });

// fs.rename("hey.txt", "hello.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("done");
// });


// fs.copyFile("hello.txt", "./copy/hey.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("done");
// });

// fs.unlink("hello.txt",(err) => {
//     if(err) console.log(err);
//     else console.log("file deleted");
// });

// fs.rm("./copy", { recursive: true }, (err) => {
//     if (err) console.log(err);
//     else console.log("done");
// });


// http modules:-

const http = require("http");
const server = http.createServer((req, res) => {
    res.end("hello world !");
});

server.listen(3000);
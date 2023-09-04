const fs = require("fs");
const crypto = require("crypto");

const startDate = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timmer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("---------------");

  setTimeout(() => console.log("Timmer 2 Finished"), 0);
  setTimeout(() => console.log("Timmer 3 Finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - startDate, "Password encrypted");

  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - startDate, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - startDate, "Password encrypted");
  });

  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - startDate, "Password encrypted");

  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - startDate, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - startDate, "Password encrypted");
  });

  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - startDate, "Password encrypted");
});

console.log("Hello from the top-level code");

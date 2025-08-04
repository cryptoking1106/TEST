// Example of how to use the hello-world-package
const helloWorldPackage = require('./index.js');

console.log('=== Using helloWorld function ===');
const result1 = helloWorldPackage.helloWorld();
console.log('Returned value:', result1);

console.log('\n=== Using getHelloWorld function ===');
const result2 = helloWorldPackage.getHelloWorld();
console.log('Returned value:', result2);

console.log('\n=== Using printHelloWorld function ===');
helloWorldPackage.printHelloWorld(); 
Object.prototype.aa = '1111';
const testData = {a: 1,b: 2 }
for (const key in testData) {
    console.log(key);
}
     console.log(Object.getOwnPropertyNames(testData))
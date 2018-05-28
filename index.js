// const fs = require('fs');
// fs.readFile('./text.txt', function (err, data) {
//     if (err) throw err;
//     data += "\nRead!!!";
//     console.log(data.toString());

//     inputText = '\nHey, that is my new file!!!';
//     fs.appendFile('./text.txt', inputText, function (err) {
//         if (err) throw err;
//         console.log("Append succeeded!!!");
//     })
// });

//#####################################
// const fs = require('fs');
// readFilePromise('./text.txt')
//     .then(data => {
//         data += "\nRead!!!";
//         console.log(data.toString());
//         return appendFilePromise('./text.txt')
//             .then(() => {
//                 throw 123
//                 console.log("Append succeeded!!!")
//             })
//     })
//     .catch(error => {
//         console.log(error)
//     })

// function readFilePromise(fileName) {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./text.txt', function (err, data) {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// }

// function appendFilePromise(fileName) {
//     return new Promise((resolve, reject) => {
//         inputText = '\nHey, that is my new file!!!';
//         fs.appendFile('./text.txt', inputText, function (err, data) {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// }
//#####################################
const fs = require('fs');

async function main() {
    function readFilePromise(fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile('./text.txt', function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    function appendFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        inputText = '\nHey, that is my new file!!!';
        fs.appendFile('./text.txt', inputText, function (err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });
}

    let data = await readFilePromise();
    data += "\nRead!!!";
    console.log(data.toString());

    let dataNew = await appendFilePromise();
    console.log("Append succeeded!!!")
}

main();



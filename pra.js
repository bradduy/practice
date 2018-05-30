// var fs = require('fs');
// var request = require('request');
// var url = 'https://jsonplaceholder.typicode.com/users';
// request(url, function (error, response, body) {
//     if (error) {
//         console.log('error:', error);
//     }
//     else {
//         let result = JSON.parse(body);
//         for (let i = 0; i < result.length; i++) {

//             let firstInfor = result[i].name + result[i].email + result[i].address;
//             let content = `Name: ${result[i].name} \nPhone: ${result[i].email} \nAddress: ${result[i].address.street}, ${result[i].address.suite}, ${result[i].address.city}`
            
//             let nameFile =`${result[i].name}`.toLowerCase().replace(/\s/g, '_');
//             fs.writeFile(`${nameFile}.txt`, content, (err, data) => {
//                 if (err) throw err;
//                 console.log('Write success')
//             })
//         }
//     }
// })

/*
validate email;
validate 1 chuoi ko co number
tim ky tu dac biet trong chuoi

// var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// var stringRegEx= /^[a-zA-Z\s]+$/
// var symbolRegEx = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/
*/


// function testRegEx(input) {
//     let emailRegEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
//     if (emailRegEx.test(input)) {
//         console.log('Valid');
//     } else {
//         console.log('Invalid');
//     }
// }
// testRegEx("ttduy@gma.vn")

// function testNumberRegEx(input) {
//     let stringRegEx = new RegExp(/^[a-zA-Z\s]+$/)
//     if (stringRegEx.test(input)) {
//         console.log('Valid');
//     } else {
//         console.log('Invalid');
//     }
// }
// testNumberRegEx("adefdsfd32")


// function testNumberRegEx(input) {
//     let symbolRegEx = new RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)
//     symbolRegEx.search(input)

// }

let a = "Strin%g*}"
var symbolRegEx = new RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g)
while (m = symbolRegEx.exec(a)) {
    console.log(m.index);
    console.log(typeof m)
  }
// while ((match = symbolRegEx.exec(a)) != null) {
//     console.log("match found at " + match.index);
//     console.log(match)
// }
// testSymbolRegEx("%#@%#dfds")
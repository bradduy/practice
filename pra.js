var fs = require('fs');
var request = require('request');
var url = 'https://jsonplaceholder.typicode.com/users';
request(url, function (error, response, body) {
    if (error) {
        console.log('error:', error);
    }
    else {
        let result = JSON.parse(body);
        for (let i = 0; i < result.length; i++) {

            let firstInfor = result[i].name + result[i].email + result[i].address;
            let content = `Name: ${result[i].name} \nPhone: ${result[i].email} \nAddress: ${result[i].address.street}, ${result[i].address.suite}, ${result[i].address.city}`
            
            let nameFile =`${result[i].name}`.toLowerCase().replace(/\s/g, '_');
            fs.writeFile(`${nameFile}.txt`, content, (err, data) => {
                if (err) throw err;
                console.log('Write success')
            })
        }
    }
})
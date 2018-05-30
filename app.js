// const fs = require('fs');

// let files = ['./text1.txt', './text2.txt', './text3.txt']
// let a = 0;

// for (let file of files) {
//     let data = fs.readFile(file, function (err, data) {
//         if (err) throw err;
//         a++;
//         console.log(data.toString());
//         console.log(a)

//         if (a == 3) {
//             fs.appendFile('./text4.txt', 'I merged these texts', function (err, dataNew) {
//                 if (err) throw err;
//                 console.log(dataNew);
//             })
//         }

//         fs.appendFile('./text4.txt', data, function (err, dataNew) {
//             if (err) throw err;
//             console.log(a)
//         })
//     });
// }
//####################################################################
//####################################################################
//####################################################################
// const fs = require('fs');

// let files = ['./text1.txt', './text2.txt', './text3.txt']
// let inputString = '';
// let a = 0;

// for (let file of files) {
//     fs.readFile(file, function (err, data) {
//         if (err) throw err;
//         // console.log(data.toString());
//          inputString += data;
//          a++;
//          if (a == 3) {
//             console.log(inputString);
//             fs.writeFile('new.txt', inputString + "new!!!", function(err, data) {
//                 if (err) throw err;
//                 console.log('Write success');
//             })
//          } else {
//              console.log('Continue');
//          }
//     });
// }
//####################################################################
//####################################################################
//####################################################################
// function filterNew(inputSearches, keyWord) {
//     let outputSearch = [];

//     for (let inputSearch of inputSearches) {
//         if (typeof inputSearch) {
//             outputSearch.push(inputSearch)
//             console.log(outputSearch);
//         } else {
//             console.log('continue...');
//         }
//     }
// }
// filterNew(['a', 'b', 'a'], 'a');

//####################################################################
//###########...Filter...#############################################
//####################################################################
// function filterOfDuy(array, op){
//     let result = []
//     for(let i = 0; i < array.length; i++){
//         if(op(array[i], i)){
//             result.push(array[i])
//         }
//     }
//     return result
// }
// var r = filterOfDuy([1, 2, 3], (item) => { return item%2===0});
// console.log(r)

//###################################################################
//###########...Map...###############################################
//###################################################################
// function mapNew(input, op) {

//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         let a = op(input[i]);
//         result.push(a)
//     }

//     return result;
// }

// let t = mapNew([2, 1, 3], (input) => { return input + 1});
// console.log(t);

// let array = [
//     {a:1 , b: 2},
//     {a: 3, b: 4},
//     {a:5, b: 6}
// ]

// console.log(mapNew(array, (x)=>{
//     return x.a+ x.b
// }))

// let family = {
//     father: {
//         firstName: "Bruce",
//         lastName: "Novey"
//     },
//     mother: {
//         firstName: "Mary",
//         lastName: "Novey"
//     }
// }

// for (let person in family) {
//     if (family.hasOwnProperty(person)){
//         var member = family[person];
//         console.log(member.firstName);
//     }
// }

// let obj = {
//     0: 10,
//     1: 9,
//     2: 8,
//     3: 7,
//     4: 6,
//     5: 5,
//     6: 4,
//     7: 3,
//     8: 2,
//     9: 1,
//     10: 0
// }
// for (let i in obj) {
//     // obj.hasOwnProperty(i)
//     console.log(obj[i]);
// }

// console.log(obj);
// console.log(Object.entries(obj))


//tao 1 arry: co 2 phan tu
// phan tu dau tien: array tu 1- 10
// phan tu thu 2 la 1 object: 1-10
//loop array cha de console.log all

// let arr = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [{
//         1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10
//     }]
// ]

// arr.forEach(getArr);

// function getArr(item) {
//     for (let i = 0; i < item.length; i++) {
//         if (typeof item[i] == 'object') {
//             let obj = item[i];
//             for (let j in obj) {
//                 console.log(obj[j] + '!!!');
//             }
//         } else {
//             console.log(item[i])
//         }
//     }
// }

/*
let a = <value>
let b = null
if(value == "duy") b = 3
if(value == "vinh") b = 4
if(value == "binh") b = 4
if(value == vietanh) b = 7

console.log(`currently a = ${a}, has value ${b}`)

test
returnB(a) //a == duy||vinh||binh||vietanh
if a != duy||vinh||binh||vietanh throw lỗi
else
output b
console.log(`currently input = ${<input>}, has value ${<output>}`)
*/
//############################################################################
//###########...Map/Switch-Case...############################################
//############################################################################
// let map = {
//     "vinh": 4,
//     "binh": 4,
//     "duy": 3,
//     vietanh: 7
// }

// function returnB(input) {
    // let b = 0;
    // switch (input.toUpperCase()) 
    // {
    //     case "DUY" : {
    //         b = 3;
    //         break;
    //     }
    //     case 'BINH' :
    //     case 'VINH' : {
    //         b =  4;
    //         break;
    //     }
    //     case 'VIETANH' : {
    //         b = 7;
    //         break;
    //     }
    //     default : {
    //         throw new Error("invalid input");
    //     }
    // }

    // return b

    // let result = null;
    // result = map[input.toLowerCase()] //map["vinh"]
    // if(result == null){
    //     throw new Error("invalid input");
    // }
    // return result
// }

// let a = "binh"
// let b = returnB(a)
// console.log(`currently input = ${a}, has value ${b}`)
//############################################################################
//###########...ForEach...####################################################
//############################################################################
// function forEachOfDuy(array, handler(item, index)) =>...
// let arr = ["a", "b", "c", "d"];

// function forEachOfDuy(arr, handler) {
//     for (let item of arr) {
//         handler(item);
//         console.log(ty + "B")
//         // console.log(typeof arr)
//     }
//     for ( let i = 0; i < arr.length; i++){
//         console.log(arr[i] + "A")
//     }
// }

// forEachOfDuy(arr, function (item, index) {
//     // console.log(item)
//     // console.log(index);
// })
// var arr = [1,2,3]
//############################################################################
//###########...Reduce...#####################################################
//############################################################################
// function reduceOfDuy(param, handler, initialValue) {
//     let total = initialValue || null
//     for (let i = 0; i < param.length; i++) {
//         total = handler(total, param[i], i, param);
//     }
//     return total;
// }


// console.log(
//     reduceOfDuy([{a: 1}, {a: 2}, {a: 3}],(total, currentValue)=>{ 
//         total.push(currentValue.a)
//         return total
// }, [])
// )

function ObjAssignOfDuy(...paramObjs) {
    let totalObj = null

    for (let item of paramObjs) {
        if (totalObj == null) {
            totalObj = item;
            continue;
        }
        for (let prop in item) {
            totalObj[prop] = item[prop];
        }
    }

    return totalObj;
}

console.log(
    ObjAssignOfDuy({ a: 3 }, { b: 4 }, { c: 5 })
)

console.log(Object.assign({ a: 3 }, { b: 4 }, { c: 5 }))


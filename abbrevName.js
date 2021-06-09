/*
    Buatlah nama yg ada pada variable menjadi nama singkatan dan harus berubah menjadi huruf besar
    contoh : 
    Sam Harris maka akan menjadi SH
*/ 
// let name = "Sam Harris"
// let arr = name.replace(/\s+/g,' ').trim().split(' ')
// let result = ''

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i][0])
//         result += arr[i][0].toUpperCase()
// }

// console.log(result)
let name = "Sam Harris"
let arr = name.replace(/\s+/g,' ').trim().split(' ').map(function(item){
    if(item[0])
        return item[0].toUpperCase()
    return ''
})
console.log(arr.join(''))
// mumbling adalah ketika orang kebanyakan minum alkohol dan mengakibatkan bicara yg kurang jelas..
// buatlah program untuk memprediksi mumbling seseorang ketika dia mabuk berat
// contoh str = "saya".. maka menjadi "S-Aa-Yyy-Aaaa" sesuai dengan urutan dan jumlah nya 
// penjelasan : 
// karena s pertama maka s dianggap posisi 1 dan tidak perlu di ulang tapi setiap huruf pertama 
// dari mumbling hrus menjadi huruf kapital
//  huruf a kedua menjadi Aa.. karena ada di posisi kedua,, dan yg pertama menjadi kapital
// ingat bahwa setiap huruf harus dtambah "-" sebagai penghubung

let str = "saya"
let result = ""
// let result = str.split('').map(function(item, index){
//     let tempStr = ''
//     for (let i = 1; i <= index + 1; i++) {
//         tempStr += i == 1 ? item.toUpperCase() : item
//     }
//     return tempStr
// }).join('-');

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i+1; j++) {
        if(j == 0){
            result += str[i].toUpperCase()
        }else{
            result += str[i]
        }
    }
    if(i != str.length - 1){
        result += '-'
    }
}

console.log(result);
// sembunyikan lah no hp berikut apabila dia ganjil maka 5 no belakang berubah menjadi x
// jika genap maka cukup 4 nomor yg menjadi x
// contoh1 = 081213459897 menjadi 0812134xxxxx karena angka paling belakang adalah 7 (ganjil)
// contoh2 = 081213459898 menjadi 08121345xxxx karena angka paling belakang adalah 8 (genap)
let phone = "081213459898"
let hiddenCount = phone[phone.length-1] % 2 == 0 ? 4 : 5
let result = ''

for (let i = 0; i < phone.length; i++) {
    if(i > phone.length - 1 - hiddenCount)
        result += "x"
    else
        result += phone[i]
}

console.log(result);
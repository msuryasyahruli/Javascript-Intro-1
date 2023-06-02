const printSegitiga = 5

const print = () => {
    let angka = ''
    for (let i = printSegitiga; i > 0; i--){
        for (let j = 1; j <= i; j++){
            angka += `${j} `
        }
        angka += '\n'
    }
    if (typeof printSegitiga === "number"){
        console.log(angka)
    } else {
        console.log("Data harus number")
    }
}
print()
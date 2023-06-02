const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

let ratarata = () => {
    tambah = mtk + bahasaIndonesia + bahasaInggris + ipa
    bagi = tambah / 4
    return bagi
}
let rata = ratarata()
console.log(`Rata-rata = ${rata}`);

let grade = rata > 89 ? "A" :
    rata > 79 ? "B" :
        rata > 69 ? "C" :
            rata > 59 ? "D" :
                "E";

console.log(`Grade = ${grade}`);
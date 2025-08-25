// SOAL 1
function shoutOut() {
    return `Halo Function!`;
};

console.log(shoutOut());


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2
let numb1 = 20;
let numb2 = 11;
function calculateMultiply(num1, num2) {
    return num1 + num2;
};

console.log(calculateMultiply(numb1, numb2));


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 3
function processSentence(name, age, addreas,hobby) {
    return `Nama saya ${name}, umur saya ${age}, alamat saya di ${addreas}, dan saya punya hobby yaitu ${hobby}`;
}

const nama = `Ryo`;
const umur = `17 tahun`;
const alamat = `Jl. Condong Catur, Sleman`;
const hobi = `Running`;

console.log(processSentence(nama, umur, alamat, hobi));
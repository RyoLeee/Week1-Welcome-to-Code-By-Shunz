// SOAL 1
function bandingkanAngka(numb1, numb2) {
    if (numb1 === numb2) {
        return -1
    } else if (numb1 < numb2) {
        return true
    } else {
        return false
    };
};

// TEST CASE
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2
function balikKata(params) {
    let balikKata = params.split(``).reverse().join('');
    return balikKata
}

// TEST CASE
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 3
function konversiMenit(params) {
    let hour = Math.floor(params / 60);
    let minutes = params % 60;
    if (minutes <= 10) {
        minutes = `0` + minutes;
    };
    return `${hour}:${minutes}`;
};


// TEST CASE
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 4
function xo(params) {
    let arr = params.toLowerCase().split(``);
    let x = 0;
    let o = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === `x`) {
            x++;
        } else if (arr[i] === `o`) {
            o++;
        };
    }
    if (x === o) {
        return true;
    } else {
        return false;
    }
}


// TEST CASE
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

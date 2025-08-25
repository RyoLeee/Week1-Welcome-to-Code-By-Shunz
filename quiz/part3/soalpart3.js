// SOAL 1
console.log(`LOOPING MAJU`);
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
};

console.log(` `);

console.log(`LOOPING MUNDUR`);
let k = 10;
while (k > 0) {
    console.log(k);
    k--;
};


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2
console.log(`LOOPING MAJU`);
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(` `);

console.log(`LOOPING MUNDUR`);
for (let k = 10; k >= 1; k--) {
    console.log(k);
}


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 3
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`GANJIL: ${i}`);
    } else {
        console.log(`GENAP: ${i}`);
    }
}


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 4
for (let i = 1; i < 100; i += 2) {
    if (i % 3 === 0) {
        console.log(`${i} - kelipatan 3`);
    };
};

console.log(` `);

for (let k = 1; k <= 100; k += 5) {
    if (k % 6 === 0) {
        console.log(`${k} - kelipatan 6`);
    };
};

console.log(` `);

for (let j = 1; j < 100; j += 9) {
    if (j % 10 === 0) {
        console.log(`${j} - kelipatan 10`);
    };
};


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 5
for (let l = 0; l < 5; l++) {
    let baris = ''
    for (let g = 0; g <= l; g++) {
     baris += `*`;
    }
 console.log(baris);
}


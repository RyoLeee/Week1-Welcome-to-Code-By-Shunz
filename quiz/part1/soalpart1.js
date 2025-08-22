// SOAL 1
function proxytiaGame(name, role) {
    const user_name = name.toLowerCase();
    const user_input = role.toLowerCase();
    
    if (user_input === `ksatria`) {
        return `Hola Ksatria ${user_input}, kamu dapat menyerang dengan senjatamu`;
    } else if (user_input === `tabib`) {
        return `halo Tabib ${user_name}, you will help your friends`;
    } else if (user_input === `penyihir`) {
        return `halo ${user_name}, ciptakan keajaiban yang akan membantu kemenanganmu`;
    } else {
        return `but I think kamu jadi bot aja ya, peran kamu pilih nggak ada`
    };
};

console.log(proxytiaGame('Ryo', 'Tabib'));

console.log(' ');

// SOAL 2
function name() {
let tanggal = Math.floor(Math.random() * 31) + 1;
let bulan = Math.floor(Math.random() * 12) + 1;
let tahun = Math.floor(Math.random() * (2200 - 1900)) + 1900;

switch (bulan) {
 case 1:
    bulan = `january`
    break;

 case 2: 
    bulan = `february`
    break;

 case 3:
    bulan = `maret`;
    break;

 case 4:
    bulan = `april`;
    break;

 case 5:
    bulan = `mei`;
    break;

 case 6:
    bulan = `juni`;
    break;

 case 7:
    bulan = `july`;
    break;

 case 8:
    bulan = `agustus`;
    break;

 case 9:
    bulan = `september`;
    break;

 case 10:
    bulan = `oktober`;
    break;

 case 11:
    bulan = `november`;
    break;

 case 12:
    bulan = `desember`;
    break;
};
 console.log(`${tanggal} - ${bulan} - ${tahun}`);
}

name();

// DONE
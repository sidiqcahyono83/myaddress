// const number = 1;

// // const year = prompt("What year new?");
// const yearNumber = 2024;

// // console.log(year);
// if (yearNumber == 2024) console.log(`Your are is great`);

// yearNumber == "2024"
//   ? console.log(`Anda Masuk Pelajaran Baru`)
//   : console.log(`Anda Tinggal Kelas!!!!`);

// if (2024 > yearNumber) {
//   console.log(`Anda Sudah Masuk Tahun Pelajaran Baru`);
// } else {
//   console.log(`Anda Tinggal Kelas`);
// }

// Harus Jeli di Type Datanya...

// let bulan = 4;

// bulan === 3
//   ? console.log(`Anda Benar`)
//   : console.log(`Anda Salah, Yang benar ${bulan}`);

// if (bulan <= 4) {
//   console.log(`Anda benar`);
// } else {
//   console.log(`Anda Salah`);
// }

// let tagihan = 4;

// if (tagihan < 4) {
//   console.log(`anda punya tgihan bulan sebelumnya`);
// } else if (tagihan > 4) {
//   console.log(`anda masuk bulan berikutnya`);
// } else if (tagihan === 4) {
//   console.log(`anda lunas ... terimakasih`);
// }

// tagihan < 4
//   ? console.log(`anda mempunyai tagihan bulan sebelumny`)
//   : tagihan === 4
//   ? console.log(`Lunas bulan ini`)
//   : alert(`masukan tagihan dengan benar!!`);

// // looping
// let numbers = 10;

// for (let loop = 1; loop <= numbers; loop++) {
//   console.log(loop);
// }

// for (let index = 0; index < numbers; index++) {
//   console.log(index);
// }

const contacts = [
  {
    nama: "cahyono muslim sidiq",
    alamat: "kebumen jawatengah",
    telepon: "628567947201",
    level: "1"
  },
  {
    nama: "rafasya",
    alamat: "kebumen jawatengah",
    telepon: "628567947202",
    level: "0"
  }
];

// console.log(contacts);

// for in looping
// menampilkan index/key dari objeknya
for (const key in contacts) {
  console.log(key);
}

//menampilkan key/index dan value nya dalam bentuk array
for (const key in contacts) {
  console.log(contacts[key]);
}

for (let index = 0; index <= contacts.length; index++) {
  let elementss = contacts[index];
  console.log(elementss);
}

for (let index = 0; index < contacts.length; index++) {
  let elements = contacts[index];
  console.log(elements);
}

for (let index = 1; index <= contacts.length; index++) {
  console.log(index);
}

for (let index = 0; index < contacts.length; index++) {
  const element = contacts[index];

  console.log(element[`nama`]);
  console.log(element[`alamat`]);
  if (element[`level`] == 1) {
    console.log("Administrator");
  } else {
    console.log("Operator");
  }
}

let tanggalSekarang = new Date();
let tahunSekarang = 2024;
if (tahunSekarang === tanggalSekarang.getFullYear()) {
  console.log(`benar sekarang tahun ${tahunSekarang}`);
} else {
  console.log(`salah yang benar sekarang tahun ${tahunSekarang}`);
}

let tahun = [2023, 2024, 2025];
let namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

console.log(tahun);
console.log(namaBulan);

console.log(tanggalSekarang.getFullYear());

// Menampilkan bulan saat ini
let bulanSaatIni = namaBulan[tanggalSekarang.getMonth()];
console.log(bulanSaatIni);

//Menampilkan tahun saat ini dan Undenfined
let tahunIni = tahun[tanggalSekarang.getFullYear()];
console.log(tahunIni);

// mengapa untuk tahun sintaknya harus find dahulu berbeda dengan bulan?
let tahunsaatIni = tahun.find(
  (tahun) => tahun === tanggalSekarang.getFullYear()
);
console.log(tahunsaatIni);

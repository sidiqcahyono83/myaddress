const number = 1;

// const year = prompt("What year new?");
const yearNumber = 2024;

// console.log(year);
if (yearNumber == 2024) console.log(`Your are is great`);

yearNumber == "2024"
  ? console.log(`Anda Masuk Pelajaran Baru`)
  : console.log(`Anda Tinggal Kelas!!!!`);

if (2024 > yearNumber) {
  console.log(`Anda Sudah Masuk Tahun Pelajaran Baru`);
} else {
  console.log(`Anda Tinggal Kelas`);
}

// Harus Jeli di Type Datanya...

let bulan = 4;

bulan === 3
  ? console.log(`Anda Benar`)
  : console.log(`Anda Salah, Yang benar ${bulan}`);

if (bulan <= 4) {
  console.log(`Anda benar`);
} else {
  console.log(`Anda Salah`);
}

let tagihan = 3;

if (tagihan < 4) {
  console.log(`anda punya tgihan bulan sebelumnya`);
} else if (tagihan > 4) {
  console.log(`anda masuk bulan berikutnya`);
} else if (tagihan === 4) {
  console.log(`anda lunas ... terimakasih`);
}

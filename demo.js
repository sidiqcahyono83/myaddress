const number = 1;

const year = prompt("What year new?");
const yearNumber = 2024;

// console.log(year);
if (year == yearNumber) console.log(`Your are is great`);

year == yearNumber
  ? console.log(`Anda Masuk Pelajaran Baru`)
  : console.log(`Anda Tinggal Kelas!!!!`);

if (year == yearNumber) {
  console.log(`Anda Sudah Masuk Tahun Pelajaran Baru`);
} else {
  console.log(`Anda Tinggal Kelas`);
}

// Harus Jeli di Type Datanya...

const bulan = 4;

bulan === "3" ? console.log(`Anda Benar`) : `Anda Salah`;

if (bulan === 4) {
  console.log(`Anda benar`);
} else {
  console.log(`Anda Salah`);
}

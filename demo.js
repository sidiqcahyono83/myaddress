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

// const contacts = [
//   {
//     nama: "cahyono muslim sidiq",
//     alamat: "kebumen jawatengah",
//     telepon: "628567947201",
//     level: "1"
//   },
//   {
//     nama: "rafasya",
//     alamat: "kebumen jawatengah",
//     telepon: "628567947202",
//     level: "0"
//   }
// ];

// // console.log(contacts);

// // for in looping
// // menampilkan index/key dari objeknya
// for (const key in contacts) {
//   console.log(key);
// }

// //menampilkan key/index dan value nya dalam bentuk array
// for (const key in contacts) {
//   console.log(contacts[key]);
// }

// for (let index = 0; index <= contacts.length; index++) {
//   let elementss = contacts[index];
//   console.log(elementss);
// }

// for (let index = 0; index < contacts.length; index++) {
//   let elements = contacts[index];
//   console.log(elements);
// }

// for (let index = 1; index <= contacts.length; index++) {
//   console.log(index);
// }

// for (let index = 0; index < contacts.length; index++) {
//   const element = contacts[index];

//   console.log(element[`nama`]);
//   console.log(element[`alamat`]);
//   if (element[`level`] == 1) {
//     console.log("Administrator");
//   } else {
//     console.log("Operator");
//   }
// }

// let dateNow = new Date();
// let yearNow = 2024;
// if (yearNow === dateNow.getFullYear()) {
//   console.log(`benar sekarang tahun ${yearNow}`);
// } else {
//   console.log(`salah yang benar sekarang tahun ${yearNow}`);
// }

// let month = [
//   "Januari",
//   "Februari",
//   "Maret",
//   "April",
//   "Mei",
//   "Juni",
//   "Juli",
//   "Agustus",
//   "September",
//   "Oktober",
//   "November",
//   "Desember"
// ];

// console.log(month);

// console.log(dateNow.getFullYear());

// // Menampilkan bulan saat ini
// let monthNow = month[dateNow.getMonth()];
// console.log(monthNow);

// //Menampilkan tahun saat ini dan Undenfined
// let year = dateNow.getFullYear();
// console.log(year);

// // mengapa untuk tahun sintaknya harus find dahulu berbeda dengan bulan?
// // let tahunsaatIni = tahun.find(
// //   (tahun) => tahun === dateNow.getFullYear()
// // );
// // console.log(tahunsaatIni);

// // LOCAL STORAGE

// localStorage.setItem("name", "Cahyono");

// let local = localStorage.getItem("name");

// console.log(local);
// console.log({ local });

// // Jika Obyek / Array Objeck maka harus di pasing JSON ke STRINGIFY => JSON.stringify dan
// // dikembalikan dengan JSON PARSE => JSON.parse
// localStorage.setItem("address", JSON.stringify(contacts));

// let contactList = localStorage.getItem("address", contacts);

// let address = JSON.parse(contactList);

// console.log(address);

// // sync dan async ( teratur dari atas ke bawah dan bisa loncat)

// console.log("sleep");
// console.log("week up");
// console.log("sleep again");

// // async

// setTimeout(() => {
//   console.log("Hallo World");
// }, 1000);

// // setInterval(() => {
// //   console.log("sleep");
// //   console.log("week up");
// //   console.log("sleep again");
// // }, 5000);

// // promise with arrow function

// const promiseExample = new Promise((resolve, reject) => {
//   if (1 > 0) {
//     resolve("login");
//   } else {
//     reject("not login");
//   }
// });

// // console.log(promiseExample);

// // then chath

// promiseExample
//   .then((result) => console.log(result))
//   .catch((reject) => console.log(reject));

// // async await

// // console.log(contacts.length);

// // async function loopContacts() {
// //   for (const contact of contacts) {
// //     await processContact(contact);
// //   }
// // }
// // // loopContacts();

// // function processContact(contact) {
// //   console.log(`ID: ${contact.id}`);
// //   console.log(`Name: ${contact.name}`);
// //   console.log(`Address: ${contact.address}`);
// //   console.log(`Phone: ${contact.phone}`);
// //   console.log(`Email: ${contact.email}`);
// //   console.log(`Is Administrator: ${contact.isOperator ? "Yes" : "No"}`);
// //   console.log("----------------------");
// // }

// // loopContacts();

// async function showContact() {
//   try {
//   } catch (error) {}
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

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index]; // Ambil objek kontak dengan indeks tertentu
  contact.isOperator
    ? console.log(`${contact.name} is an Administrator`)
    : console.log(`${contact.name} is a User`);
  // contacts.isOperator ? console.log(`${contacts.name} Administrator`) : console.log(`User`);
}
// contacts.isOperator ? console.log(`Administrator`) : console.log(`User`);

// console.log(contacts);

for (let index = 0; index < contacts.length; index++) {
  let element = contacts[index];
  console.log(`
  ${element.id}
  ${element.name}
  ${element.address}
  ${element.email}
  ${element.phone}
  ${element.isOperator}
 
  
  `);
  // element.isOperator ?  1 "Admin" : "operator";
}

console.log();

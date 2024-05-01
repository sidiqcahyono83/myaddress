const contacts = [
  {
    id: 1,
    name: "cahyono muslim sidiq",
    address: "Jl. Raya Sruweng No. 114",
    phone: +628567947201,
    email: "cdq.cahyono@gmail.com",
    isOperator: 1
  },
  {
    id: 2,
    name: "Tsaqif Rafasya Sidiq",
    address: "Jl. Raya Sruweng No. 115",
    phone: +628567947202,
    email: "tasqif.sidiq@gmail.com",
    isOperator: 0
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
  console.table(`
  ${element.id}
  ${element.name}
  ${element.address}
  ${element.phone}
 
  `);
}

// LOCAL STORAGE

localStorage.setItem("name", "Cahyono");

let local = localStorage.getItem("name");

console.log(local);
console.log({ local });

// Jika Obyek / Array Objeck maka harus di pasing JSON ke STRINGIFY => JSON.stringify dan
// dikembalikan dengan JSON PARSE => JSON.parse
localStorage.setItem("address", JSON.stringify(contacts));

let contactList = localStorage.getItem("address", contacts);

let address = JSON.parse(contactList);

console.log(address);

// sync dan async ( teratur dari atas ke bawah dan bisa loncat)

console.log("sleep");
console.log("week up");
console.log("sleep again");

// async

setTimeout(() => {
  console.log("Hallo World");
}, 1000);

// setInterval(() => {
//   console.log("sleep");
//   console.log("week up");
//   console.log("sleep again");
// }, 5000);

// promise with arrow function

const promiseExample = new Promise((resolve, reject) => {
  if (1 > 0) {
    resolve("login");
  } else {
    reject("not login");
  }
});

// console.log(promiseExample);

// then chath

promiseExample
  .then((result) => console.log(result))
  .catch((reject) => console.log(reject));

// async await

// console.log(contacts.length);

// async function loopContacts() {
//   for (const contact of contacts) {
//     await processContact(contact);
//   }
// }
// // loopContacts();

// function processContact(contact) {
//   console.log(`ID: ${contact.id}`);
//   console.log(`Name: ${contact.name}`);
//   console.log(`Address: ${contact.address}`);
//   console.log(`Phone: ${contact.phone}`);
//   console.log(`Email: ${contact.email}`);
//   console.log(`Is Administrator: ${contact.isOperator ? "Yes" : "No"}`);
//   console.log("----------------------");
// }

// loopContacts();

async function showContact() {
  try {
  } catch (error) {}
}

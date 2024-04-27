const contacts = [
  {
    name: "cahyono muslim sidiq",
    address: "Jl. Raya Sruweng No. 114",
    phone: +628567947201,
    email: "cdq.cahyono@gmail.com",
    isOperator: 1
  },
  {
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

console.log(contacts);
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

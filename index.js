<<<<<<< HEAD
const contactsListElement = document.getElementById("list-contacts");
const contacts = [
  {
    id: 1,
    name: "cahyono muslim sidiq",
    address: "Jl. Raya Sruweng No. 114",
    phone: +628567947201,
    email: "cdq.cahyono@gmail.com",
    level: 1
=======
const contactsListElement = document.getElementById("contacts");

const contacts = [
  {
    id: 1,
    name      : "cahyono muslim sidiq",
    address   : "Jl. Raya Sruweng No. 114",
    phone     : "+628567947201",
    email     : "cdq.cahyono@gmail.com",
    isOperator: 1,
>>>>>>> d66da67ee39dbe1496dd2c86e0ad7bd98d9c4402
  },
  {
    id: 2,
    name: "Tsaqif Rafasya Sidiq",
    address: "Jl. Raya Sruweng No. 115",
    phone: "+628567947202",
    email: "tasqif.sidiq@gmail.com",
<<<<<<< HEAD
    level: 0
  }
];

function listContacts() {
  let storedContacts = localStorage.getItem("contacts");
  if (storedContacts) {
    // Jika terdapat data yang tersimpan di local storage
    storedContacts = JSON.parse(storedContacts);
    const contasString = storedContacts.map((contact) => {
      const level = contact.level == 1 ? `Administrator` : `User`;
      return `<li>
      <h2>No    : ${contact.id}</h2>
      <p>Name   : ${contact.name}</p>
      <p>Address: ${contact.address}</p>
      <p>Phone  : ${contact.phone}</p>
      <p>Email  : ${contact.email}</p>
      <p>Leve  : ${level}</p>
      </li>`;
    });
    contactsListElement.innerHTML = contasString.join(""); // Menggunakan join("") untuk menggabungkan array menjadi string
  } else {
    // Jika tidak ada data yang tersimpan di local storage, menggunakan data dari variabel
    const contasString = contacts.map((contact) => {
      const level = contact.level == 1 ? `Administrator` : `User`;
      return `<li>
      <h2>No    : ${contact.id}</h2>
      <p>Name   : ${contact.name}</p>
      <p>Address: ${contact.address}</p>
      <p>Phone  : ${contact.phone}</p>
      <p>Email  : ${contact.email}</p>
      <p>Leve  : ${level}</p>
      </li>`;
    });
    contactsListElement.innerHTML = contasString.join(""); // Menggunakan join("") untuk menggabungkan array menjadi string
  }
}

// Memanggil fungsi listContacts saat halaman dimuat
listContacts();
=======
    isOperator: 0,
  }
];


function showContacts() {
  const showContactsString = contacts.map((contact) => {
      const level = contact.isOperator == 1 ? `Administrator` : ` User`;

      return `<li>
              <h2>No      : ${contact.id}</h2>
              <p>Name     : ${contact.name}</p>
              <p>Address  : ${contact.address}</p>
              <p>Email    : ${contact.email}</p>
              <p>Phone    : ${contact.phone}</p>
              <p>Level    : ${level}</p>
              </li>
              `
    });
  contactsListElement.innerHTML = showContactsString;
}
showContacts();
>>>>>>> d66da67ee39dbe1496dd2c86e0ad7bd98d9c4402

const contactsListElement = document.getElementById("list-contacts");
const addContactFormElement = document.getElementById("form-contacts");

const contacts = [
  {
    id: 1,
    name: "cahyono muslim sidiq",
    address: "Jl. Raya Sruweng No. 114",
    phone: +628567947201,
    email: "cdq.cahyono@gmail.com",
    level: 1,
  },
  {
    id: 2,
    name: "Tsaqif Rafasya Sidiq",
    address: "Jl. Raya Sruweng No. 115",
    phone: +628567947202,
    email: "tasqif.sidiq@gmail.com",
    level: 0,
  },
];

function saveContact(newDataContact = contacts) {
  localStorage.setItem("contacts", JSON.stringify(newDataContact));
}

function listContacts() {
  let storedContacts = localStorage.getItem("contacts");
  if (storedContacts) {
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
    contactsListElement.innerHTML = contasString.join("");
  } else {
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
    contactsListElement.innerHTML = contasString.join("");
  }
}
listContacts();

function addContact(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const stored = saveContact();
  const storedContacts = localStorage.getItem("contacts");

  let contactsParse = storedContacts ? JSON.parse(storedContacts) : [];

  const nextId = contactsParse[contacts.length - 1].id + 1;

  const newContact = {
    id: nextId,
    name: formData.get("name"),
    address: formData.get("address"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    level: formData.get(level),
  };

  const newDataContact = [...contacts, newContact];
  saveContact(newDataContact);
  listContacts();
}

addContactFormElement.addEventListener("submit", addContact);

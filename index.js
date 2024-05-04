const contactsListElement = document.getElementById("contacts");

const contacts = [
  {
    id: 1,
    name      : "cahyono muslim sidiq",
    address   : "Jl. Raya Sruweng No. 114",
    phone     : "+628567947201",
    email     : "cdq.cahyono@gmail.com",
    isOperator: 1,
  },
  {
    id: 2,
    name: "Tsaqif Rafasya Sidiq",
    address: "Jl. Raya Sruweng No. 115",
    phone: "+628567947202",
    email: "tasqif.sidiq@gmail.com",
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

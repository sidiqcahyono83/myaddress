const contactsListElement = document.getElementById("list-contacts");
const searchKeywordInputElement = document.getElementById("contact-keyword");
const contacts = [
  {
    id: 1,
    name: "cahyono muslim sidiq",
    address: "Jl. Raya Sruweng No. 114",
    phone: +628567947201,
    email: "cdq.cahyono@gmail.com",
    level: 1
  },
  {
    id: 2,
    name: "Tsaqif Rafasya Sidiq",
    address: "Jl. Raya Sruweng No. 115",
    phone: +628567947202,
    email: "tasqif.sidiq@gmail.com",
    level: 0
  }
];

function listContacts() {
  const searchParams = new URLSearchParams(window.location.search);
  // const keyword = searchParams.get("q");
  // searchKeywordInputElement.value = keyword;

  // // const listDataContact = listContacts();

  // const filteredContacts = keyword
  //   ? searchContacts(contacts, keyword)
  //   : contacts;
  // console.log(filteredContacts);

  let storedContacts = localStorage.getItem("contacts");
  if (storedContacts) {
    storedContacts = JSON.parse(storedContacts);
    const contasString = storedContacts.map((contact) => {
      const level = contact.level == 1 ? `Administrator` : `User`;
      return `<li>
      <a href="/edit/?id=${contact.id}">
      <h2>Name   : ${contact.name}</h2>
      <p>Address: ${contact.address}</p>
      <p>Phone  : ${contact.phone}</p>
      <p>Email  : ${contact.email}</p>
      <p>Leve  : ${level}</p>
      </li>
      </a>
      <br>`;
    });
    contactsListElement.innerHTML = contasString.join("");
  } else {
    const contasString = contacts.map((contact) => {
      const level = contact.level == 1 ? `Administrator` : `User`;
      return `<li>
      <a href="/edit/?id=${contact.id}">
      <h2>Name   : ${contact.name}</h2>
      <p>Address: ${contact.address}</p>
      <p>Phone  : ${contact.phone}</p>
      <p>Email  : ${contact.email}</p>
      <p>Leve  : ${level}</p>
      </li>
      </a>
      <br>`;
    });
    contactsListElement.innerHTML = contasString.join("");
  }
}

listContacts();

function searchContacts(contacts, keyword) {
  const searchedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLowerCase());
  });
  return searchedContacts;
}

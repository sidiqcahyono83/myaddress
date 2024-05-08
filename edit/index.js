const contactByIdElement = document.getElementById("contact-by-id");

function renderContactById() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));

  const contacts = JSON.parse(localStorage.getItem("contacts"));

  const contact = contacts.find((contact) => {
    return contact.id === id;
  });

  const level = contact.level == 1 ? "Administrator" : "User";

  const contactByIdString = `<div>
  <h1>Nomor : ${contact.id}</h1>
    <h2>${contact.name} is ${level}</h2>
    <p>Age: ${contact.address}</p>
    <p>Email: ${contact.phone}</p>
    <p>Phone: ${contact.email}</p>
  </div>`;

  contactByIdElement.innerHTML = contactByIdString;
}

renderContactById();

const contactsLocalStorage = JSON.parse(localStorage.getItem("contacts"));

function updateContact(id, newData) {
  const updatedContacts = contactsLocalStorage.map((contact) => {
    if (contact.id === id) {
      return { ...contact, ...newData };
    }
    return contact;
  });

  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}

function deleteContact(id) {
  const updatedContacts = contactsLocalStorage.filter((contact) => {
    return contact.id !== id;
  });

  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}

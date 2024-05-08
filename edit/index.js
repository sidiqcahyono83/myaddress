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
    <h2>${contact.name} is ${level}</h2>
    <p>Age: ${contact.address} years old</p>
    <p>Email: ${contact.phone}</p>
    <p>Phone: ${contact.email}</p>
  </div>`;

  contactByIdElement.innerHTML = contactByIdString;
}

renderContactById();

import css from "./App.module.css";
import contactsArray from "./contactsArray";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringified = localStorage.getItem("contacts");
    if (!stringified) {
      return contactsArray;
    }
    const contactsParse = JSON.parse(stringified);
    return contactsParse;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  function handleChange(evt) {
    setFilter(evt.target.value);
  }
  const filterContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={css.rootContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <SearchBar value={filter} onFilter={handleChange} />
      <ContactList contactValue={filterContacts}/>
    </div>
  );
}

export default App;

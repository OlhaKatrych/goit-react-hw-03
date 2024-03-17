import css from "./App.module.css";
import contactsArray from "./contactsArray";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringified = localStorage.getItem("contacts");
    if (!stringified) {
      return contactsArray;
    }
    const contactsParse = JSON.parse(stringified);
    return contactsParse;
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });
  return (
    <div className={css.rootContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactList contactValue={contacts}/>
    </div>
  );
}

export default App;

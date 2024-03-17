import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contactValue }) {
  return (
    <div>
      <Contact contactValue={contactValue}/>
    </div>
  );
}

export default ContactList;

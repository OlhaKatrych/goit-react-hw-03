import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact({ contactValue }) {
  console.log(contactValue);
  return (
    <div className={css.listContainer}>
      {contactValue.map((contact) => {
        return (
          <li key={contact.id} className={css.listContact}>
            <div className={css.textNumberContainer}>
              <p className={css.textName}>
                <span className={css.symbol}>
                  <IoPersonSharp />
                </span>
                <b>{contact.name}</b>
              </p>
              <p className={css.phone}>
                <span className={css.symbol}>
                  <BsFillTelephoneFill />
                </span>
                <b>{contact.number}</b>
              </p>
            </div>
            <button type="button" className={css.btnDelete}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default Contact;

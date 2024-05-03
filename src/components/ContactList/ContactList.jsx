import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const valueFilter = useSelector(selectNameFilter);

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(valueFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filtredContacts.map((item) => (
        <li key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}

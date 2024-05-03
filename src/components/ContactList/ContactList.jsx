import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  console.log("🚀 ~ ContactList ~ contacts:", contacts);

  return (
    <ul className={css.list}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}

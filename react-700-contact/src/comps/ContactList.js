import { NavLink, useLoaderData } from "react-router-dom";

const ContactList = () => {
  const { contacts } = useLoaderData();
  return (
    <nav className="list">
      <ul>
        {contacts.map((contact) => (
          <li>
            <NavLink
              to={`detail/${contact.c_uid}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {contact.c_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContactList;

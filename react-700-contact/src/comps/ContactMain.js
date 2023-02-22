import ContactSearch from "./ContactSearch";
import ContactList from "./ContactList";
import { Outlet } from "react-router-dom";

const ContactMain = () => {
  return (
    <div class="main-container">
      <aside>
        <h1>Hello Contact</h1>
        <div class="main search">
          <ContactSearch />
        </div>
        <ContactList />
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default ContactMain;

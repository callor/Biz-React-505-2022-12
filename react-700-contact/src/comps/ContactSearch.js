import { useLoaderData } from "react-router-dom";
const ContactSearch = () => {
  const { hello } = useLoaderData();
  return (
    <form>
      <input placeholder="검색" />
      <button>+</button>
      <>{hello}</>
    </form>
  );
};

export default ContactSearch;

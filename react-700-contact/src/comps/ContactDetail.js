import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const uid = params.uid;
  const res = await fetch(`/api/detail/?uid=${uid}`);
  const result = await res.json();
  return { contact: result };
};

const ContactDetail = () => {
  const { contact } = useLoaderData();
  return (
    <div className="detail">
      <div>
        <h1></h1>
      </div>
      <div>id : {contact.c_uid}</div>
      <div>이름 : {contact.c_name}</div>
      <div>tel : {contact.c_tel}</div>
    </div>
  );
};
export default ContactDetail;

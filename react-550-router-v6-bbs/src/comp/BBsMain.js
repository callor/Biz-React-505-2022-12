// import { redirect, useNavigation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import "../css/BBs.css";

// export const action = async () => {
//   const contact = await createContact();
//   return redirect(`/contacts/${contact.id}/edit`);
// };

const BBsMain = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BBsMain;

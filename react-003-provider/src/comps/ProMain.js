import { ProContextProvider } from "../context/ProContext";
import ProList from "./ProList";
import ProInput from "./ProInput";
const ProMain = () => {
  return (
    <ProContextProvider>
      <ProInput />
      <ProList />
    </ProContextProvider>
  );
};
export default ProMain;

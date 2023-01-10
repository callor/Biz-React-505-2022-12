import { Container } from "@mui/material";
import ButtonComp from "./ButtonComp";

const MyContainer = ({ text }) => {
  return (
    <Container maxWidth="sm">
      <ButtonComp text="Click" variant="text" />
      <ButtonComp text="Submit" variant="contained" />
      <ButtonComp text="Cancel" variant="outlined" />
      <ButtonComp variant="outlined">{text}</ButtonComp>
    </Container>
  );
};

export default MyContainer;

import { Container, TextField, Button } from "@mui/material";
import { useCallback, useState } from "react";
import { useFirebaseContext } from "../provider/FirebaseProvider";

const EmailLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginMessage, emailLogin } = useFirebaseContext();

  const onChangeHandler = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [setUser, user]
  );

  return (
    <Container fixed maxWidth="xl">
      <div>
        <TextField
          name="email"
          value={user.email}
          onChange={onChangeHandler}
          variant="outlined"
          fullWidth
          margin="dense"
          label="EMAIL"
          error={loginMessage.id === "email"}
          helperText={loginMessage.id === "email" ? loginMessage.message : ""}
        />
      </div>
      <div>
        <TextField
          name="password"
          onChange={onChangeHandler}
          value={user.password}
          variant="outlined"
          fullWidth
          margin="dense"
          label="PASSWORD"
          type="password"
          error={loginMessage.id === "password"}
          helperText={
            loginMessage.id === "password" ? loginMessage.message : ""
          }
        />
      </div>
      <div>
        {loginMessage.id === "etc" ? <p>{loginMessage.message}</p> : <></>}
        <Button
          variant="outlined"
          onClick={() => {
            emailLogin(user);
          }}
        >
          Email 로그인
        </Button>
      </div>
    </Container>
  );
};

export default EmailLogin;

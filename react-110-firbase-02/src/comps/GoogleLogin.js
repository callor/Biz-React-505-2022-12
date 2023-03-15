import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useAuthContext } from "../firebase/AuthProvider";
const GoogleLogin = () => {
  const { loginUser, googleSignIn, googleSignOut } = useAuthContext();
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: "30px", p: "20px" }}>
        {loginUser ? (
          <>
            <p>{loginUser?.email}</p>
            <Button variant="contained" onClick={googleSignOut}>
              {loginUser?.email} 로그아웃
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={googleSignIn}>
            구글 로그인
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default GoogleLogin;

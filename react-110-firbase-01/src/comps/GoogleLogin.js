import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useFirebaseContext } from "../provider/FirebaseProvider";
const GoogleLogin = () => {
  const { loginUser, googleSignIn, googleSignOut } = useFirebaseContext();
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: "30px", p: "20px" }}>
        {loginUser ? (
          <Button variant="contained" onClick={googleSignOut}>
            {loginUser?.displayName} 로그아웃
          </Button>
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

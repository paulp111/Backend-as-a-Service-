import { useState } from "react";
import { auth } from "./firebase/firebaseInit";
import SignInButton from "./firebase/SignIn";
import SignOutButton from "./firebase/SignOut";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Button, Grid, Container } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import Books from "./Books"; 
import Form from "./Form";

function App() {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const header = {
    backgroundColor: "#fff",
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "2px 2px 3px gray",
    padding: "3px 5%",
  };

  return (
    <>
      <header className="App" style={header}>
        <span style={{ fontSize: "2em" }}>Bookshelf</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "400px",
            height: "80%",
            justifyContent: "space-between",
          }}
        >
          <SignOutButton />
          {user ? null : <SignInButton />}
          {user && (
            <Button
              size="large"
              startIcon={<AutoStoriesIcon />}
              variant="outlined"
              onClick={() => setOpen(true)}
            >
              Add Book
            </Button>
          )}
        </div>
      </header>
      <main style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            sx={{ display: "flex", flexWrap: "wrap", mt: 10, mb: 10 }}
          >
            {user ? (
              <Books />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  color: "#C0C4C4",
                  height: "60vh",
                  width: "100%",
                }}
              >
                Please Sign in to see your Books
              </div>
            )}
          </Grid>
        </Container>
      </main>
      <Form open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

export default App;


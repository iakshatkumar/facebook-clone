import React from "react";

// import styles
import "./Login.css";

// import material components
import { Button } from "@material-ui/core";

// import firebase stuff
import { auth, provider } from "./firebase";

// user handling
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // some clever signin stuff..
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // TESTING
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://iconape.com/wp-content/files/yd/117914/svg/Facebook_f_logo__2019_.svg" />
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;

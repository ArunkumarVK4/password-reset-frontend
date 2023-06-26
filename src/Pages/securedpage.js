import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import neil from "../Pages/neil.gif";
import React from 'react';



function SecuredPage() {
    const history = useHistory();
  
    return (
      <div className="SECURE">
        <div style={{ marginLeft: "1rem" }}>
          <h1 style={{ color: "whitesmoke" }}>
            Congratulations!! You have successfully logged in!!
          </h1>
          <img className="neil" src={neil} alt="neil"></img>
          <Button   
            style={{ display: "block" }}
            onClick={() => history.push("/login")}
            positive
          >
            Back to Login
          </Button>
        </div>
      </div>
    );
  }
  export { SecuredPage };
  
import Landing from "./Landing";
import Success from "./Success";
import { useState } from "react";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <>
      {success ? (
        <Success email={userEmail} />
      ) : (
        <Landing
          setSuccess={setSuccess}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
        />
      )}
    </>
  );
};

export default App;

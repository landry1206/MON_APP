import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div>
            <img src="./images/imgTra/imgt3.jpg" className="img-login" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;

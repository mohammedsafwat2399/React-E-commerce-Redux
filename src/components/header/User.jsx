import React, { useState } from "react";
 import { useDispatch } from "react-redux";
import { authtActions } from "../../store/authSlice";
import { BiLogOut } from "react-icons/bi";

const User = () => {
  const dispatch = useDispatch();
  const logoutHandel = () => {
    dispatch(authtActions.logOut());
  };
  const user = true;
  const [profilofileOpen, setProfiloFileOpen] = useState(false);
  const close = () => {
    setProfiloFileOpen(null);
  };

  return (
    <div className="profile">
      {user ? (
        <>
          <button
            className="img"
            onClick={() => setProfiloFileOpen(!profilofileOpen)}
          >
            My Account
          </button>
          {profilofileOpen && (
            <div className="openPrefile boxItems" onClick={close}>
              <div className="image">
                <div className="text">
                  <h4>mohammed safwat</h4>
                  <label htmlFor="">Egept maina</label>
                </div>
              </div>

              <button className="box" onClick={logoutHandel}>
                <BiLogOut className="icon" />
                <h4>log Out</h4>
              </button>
            </div>
          )}
        </>
      ) : (
        <button>My Account</button>
      )}
    </div>
  );
};
export default User;

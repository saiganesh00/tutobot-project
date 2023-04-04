import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function PopupDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
    setIsDialogOpen(true);
  };

  const openSignUpForm = () => {
    setIsLoginFormOpen(false);
    setIsDialogOpen(true);
  };

  return (
    <>
      <button onClick={openDialog}>Log In / Sign Up</button>

      {isDialogOpen && (
        <div className="popup-dialog">
          <button onClick={closeDialog}>Close Dialog</button>

          {isLoginFormOpen ? (
            <Login />
          ) : (
            <SignUp />
          )}

          <div className="popup-dialog-toggle">
            {isLoginFormOpen ? (
              <p>Don't have an account yet?</p>
            ) : (
              <p>Already have an account?</p>
            )}

            <button
              onClick={() =>
                isLoginFormOpen
                  ? openSignUpForm()
                  : openLoginForm()
              }
            >
              {isLoginFormOpen ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupDialog;

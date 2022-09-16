import React from "react";
import SignUpModal from "./SignUpModal";
import { useSelector } from "../../store";
import LoginModal from "./LoginModal";

interface IProps {
  closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({ closeModal }) => {
  const authMode = useSelector((state) => state.auth.authMode);
  return (
    <>
      {authMode === "signup" && <SignUpModal closeModal={closeModal} />}
      {authMode === "login" && <LoginModal closeModal={closeModal} />}
    </>
  );
};

export default AuthModal;

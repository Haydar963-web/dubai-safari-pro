import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "./forms.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      return toast.info("Email Is Required");
    } else if (userName.trim() === "") {
      return toast.info("UserName Is Required");
    } else if (password.trim() === "") {
      return toast.info("Password Is Required");
    } else if (password !== confirmPassword) {
      return toast.error("Password Don't Match");
    }
  };

  //
  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <form onSubmit={formSubmitHandler} className="form">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
          type="text"
          placeholder="User Name"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="form-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;

import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import ChatLogo from "../assets/Logo.svg";
import ChatLogo from "../assets/logo192.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastOptions } from "react-toastify/dist/types";
import Spinner from "../components/Spinner";
import { signUp } from "../api";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<Boolean>(false);

  const toastOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/chat");
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();

    try {
      if (handleValidation()) {
        const { password, username, email } = values;

        const { data } = await signUp({ password, username, email });
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem("chat-app-user", JSON.stringify(data.user));
          navigate("/setAvatar");
        }
      }
    } catch (err:any) {
      err(true);
      toast.error("Something went wrong.", toastOptions);
    } finally {
      setLoading(false);
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error("Passwords don't match", toastOptions);
      return false;
    } else if (username.length < 4) {
      toast.error("Username should have at least 4 characters", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password should have at least 8 characters", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={ChatLogo} alt="logo" />
            <h1>KaveTalk</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={(e) =>
              setValues({ ...values, confirmPassword: e.target.value })
            }
          />
          <button type="submit">
            {loading ? (
              <Spinner width="50px" height="50px" />
            ) : (
              "Create User"
            )}
          </button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #FFFFF;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #00D280;
      
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #EEEEEE;
    border-radius: 0.8rem;
    padding: 3rem 4rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #00D280;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #023047;
      outline: none;
      color:black;
    }
  }
  button {
    background-color: #00D280;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #023047;
    }
  }
  span {
    color: black;
    text-transform: uppercase;
    a {
      color: #00D280;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;

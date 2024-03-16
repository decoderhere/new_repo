import { useEffect, useState } from "react";
import "./loginsignup.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSignup } from "../Actions/loginsignp";

function LoginSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  function formHandler(e) {
    e.preventDefault();
    dispatch(loginSignup(data));
  }

  function fieldhandler(e) {
    setdata((preData) => ({
      ...preData,
      [e.target.name]: e.target.value,
    }));
    
  }


  const { name, email, password } = data;
  return (
    <>
      <div className="form_container">
        <div className="form_sub_container">
          <form className="form_data" onSubmit={formHandler}>
            <label> Name</label>
            <br></br>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) =>
                setdata((pre) => ({
                  ...pre,
                  name: e.target.value,
                }))
              }
            />{" "}
            <br></br>
            <label> Email</label>
            <br></br>
            <input
              type="email"
              name="email"
              value={email}
              onChange={fieldhandler}
            />
            <br></br>
            <label> Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              value={password}
              onChange={fieldhandler}
            />
            <br></br>
            <input type="submit" value="SUBMIT" className="button" />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;

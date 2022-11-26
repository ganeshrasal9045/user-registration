import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_Img from "./Sign_Img";
import {useNavigate} from "react-router-dom"

const Login = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr); 

    const {email, password} = inpval;

    if (email === "") {
      alert("email field is reqiured");
    } else if (!email.includes("@")) {
      alert("plz enter valid email address");
    } else if (password === "") {
      alert("password field is reqiured");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      
      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        // console.log(userdata);
        const userlogin = userdata.filter((el,k)=>{
          return el.email === email && el.password === password 
        });
        // console.log(userlogin);

        if(userlogin.length === 0){
          alert("invalid details")
        }else{
          console.log("user login successfully")

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/details")
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data mt-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-4">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6 "
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgba(67,185,127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span>SignIn</span>
            </p>
          </div>
          <Sign_Img />
        </section>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    password: "",
    agree: "",
  });
  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setInputValues({ ...inputValues, [name]: value });
  };
  return (
    <div>
      <body className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="brand">
                  <img src="https://img.icons8.com/fluent-systems-filled/96/000000/user.png" />{" "}
                </div>
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Register</h4>
                    <div className="my-login-validation">
                      <div className="form-group">
                        <label for="name">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="fullName"
                          required
                          value={inputValues.fullName}
                          onChange={handleOnChangeInput}
                          autoFocus
                        />
                        <div className="invalid-feedback">
                          What's your name?
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          required
                          value={inputValues.email}
                          onChange={handleOnChangeInput}
                        />
                        <div className="invalid-feedback">
                          Your email is invalid
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          //   data-eye={false}
                          value={inputValues.password}
                          onChange={handleOnChangeInput}
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>

                      {/* <div class="form-group">
                        <label>Password</label>
                        <div class="input-group" id="show_hide_password">
                          <input class="form-control" type="password" />
                          <div class="input-group-addon">
                            <a onClick={handlePasswordShow}>
                              <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div> */}

                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            className="custom-control-input"
                            required=""
                            value={inputValues.agree}
                            onChange={handleOnChangeInput}
                          />
                          <label for="agree" className="custom-control-label">
                            I agree to the <a href="#">Terms and Conditions</a>
                          </label>
                          <div className="invalid-feedback">
                            You must agree with our Terms and Conditions
                          </div>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Register
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Already have an account?
                        <Link to="/">Login </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="footer">
						Copyright &copy; 2017 &mdash; Your Company
					</div> */}
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default SignUp;


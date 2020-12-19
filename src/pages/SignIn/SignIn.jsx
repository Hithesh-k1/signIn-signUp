import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
function Login() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleOnSubmit = (e) => {
    console.log(inputValues);
    history.push("/home");
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
                    <h4 className="card-title">Login</h4>
                    <div className="my-login-validation">
                      <div className="form-group">
                        <label>E-Mail</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value={inputValues.email}
                          onChange={handleOnChangeInput}
                          required
                        />
                        <div className="invalid-feedback">Email is invalid</div>
                      </div>

                      <div className="form-group">
                        <label>
                          Password
                          {/* <a href="forgot.html" className="float-right">
											Forgot Password?
										</a> */}
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          value={inputValues.password}
                          onChange={handleOnChangeInput}
                          required
                          data-eye
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>

                      {/* <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="custom-control-input"
                          />
                          <label
                            for="remember"
                            className="custom-control-label"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div> */}

                      <div className="form-group m-0">
                        <button
                          className="btn btn-primary btn-block"
                          onClick={handleOnSubmit}
                        >
                          Login
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Don't have an account?
                        <Link to="/signup">Create One </Link>
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

export default Login;

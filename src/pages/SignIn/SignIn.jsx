import { useFormik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
});

function Login() {
  const history = useHistory();
  const loginSuccessful = () => {
    history.push("/home");
  };
  const onSubmit = (values) => {
    loginSuccessful();
    alert(JSON.stringify(values, null, 2));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
                      <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                          <label>E-Mail</label>
                          <input
                            id="email"
                            type="email"
                            className="form-control"
                            name="email"
                            {...formik.getFieldProps("email")}
                            required
                          />
                          <div class="invalid-feedback d-block">
                            {formik.errors.email && formik.touched.email && (
                              <p>{formik.errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input
                            id="password"
                            type="password"
                            className="form-control"
                            name="password"
                            {...formik.getFieldProps("password")}
                            required
                            data-eye
                          />
                          <div class="invalid-feedback d-block">
                            {formik.errors.password &&
                              formik.touched.password && (
                                <p>{formik.errors.password}</p>
                              )}
                          </div>
                        </div>

                        <div className="form-group m-0">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <div className="mt-4 text-center">
                          Don't have an account?
                          <Link to="/signup">Create One </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="footer">Copyright &copy; 2021 &mdash;</div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Login;

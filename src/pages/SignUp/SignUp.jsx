import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as constant from "../../constants";

const initialValues = {
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
  agree: false,
};

const validationSchema = Yup.object({
  full_name: Yup.string()
    .min(2, "Mininum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Password's not match")
    .required("Required!"),
  agree: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const onSubmit = (values) => {
  console.log("fghjk");
  alert(JSON.stringify(values, null, 2));
};

function SignUp() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(formik.values);

  return (
    <React.Fragment>
      <body className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="brand">
                  <img src={constant.USER_ICON} alt="user" />
                </div>
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Register</h4>
                    <div className="my-login-validation">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                          <label for="name">Full Name</label>

                          <input
                            id="name"
                            type="text"
                            className="form-control"
                            name="full_name"
                            {...formik.getFieldProps("full_name")}
                          />
                          <div class="invalid-feedback d-block">
                            {formik.errors.full_name &&
                              formik.touched.full_name && (
                                <p>{formik.errors.full_name}</p>
                              )}
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
                            {...formik.getFieldProps("email")}
                          />
                          <div class="invalid-feedback d-block">
                            {formik.errors.email && formik.touched.email && (
                              <p>{formik.errors.email}</p>
                            )}
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
                            {...formik.getFieldProps("password")}
                          />
                          <div class="invalid-feedback d-block">
                            {formik.errors.password &&
                              formik.touched.password && (
                                <p>{formik.errors.password}</p>
                              )}
                          </div>
                        </div>

                        <div className="form-group">
                          <label for="password">Confirm Password</label>
                          <input
                            id="password"
                            type="password"
                            className="form-control"
                            name="confirm_password"
                            {...formik.getFieldProps("confirm_password")}
                          />
                          <div class="invalid-feedback d-block">
                            {formik.errors.confirm_password &&
                              formik.touched.confirm_password && (
                                <p>{formik.errors.confirm_password}</p>
                              )}
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="custom-checkbox custom-control">
                            <input
                              type="checkbox"
                              name="agree"
                              id="agree"
                              class="custom-control-input"
                              required=""
                              {...formik.getFieldProps("agree")}
                            />

                            <label for="agree" className="custom-control-label">
                              I agree to the{" "}
                              <a href="#">Terms and Conditions</a>
                            </label>
                            <div class="invalid-feedback d-block">
                              {formik.errors.agree && formik.touched.agree && (
                                <p>{formik.errors.agree}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="form-group m-0">
                          <div>
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          Already have an account?
                          <Link to="/">Login </Link>
                        </div>
                      </form>
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
    </React.Fragment>
  );
}

export default SignUp;

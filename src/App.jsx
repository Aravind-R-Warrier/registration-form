import { Formik, Field, ErrorMessage } from 'formik';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Validation
const validate = (values) => {
  const errors = {};

  if (!values.fullname) {
    errors.fullname = 'Full name is required';
  } 

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phonenumber) {
    errors.phonenumber = 'Phone number is required';
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!values.termsAccepted) {
    errors.termsAccepted = 'You must accept the terms and conditions';
  }

  return errors;
};

function App() {
  const initialValues = {
    fullname: '',
    email: '',
    phonenumber: '',
    dateOfBirth: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: '',
    country: '',
    profilePicture: null,
    termsAccepted: false
  };

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);

  };

  return (
    <div className="container mt-5"style={{backgroundColor:"#9595AE"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4 fw-2 fs-1 fw-1">Registration Form</h2>
            <Formik
            style={{backgroundColor:"#9595AE"}}
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  {/* Full Name Section */}
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <Field
                      id="fullname"
                      name="fullname"
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage name="fullname" component="div" className="text-danger small" />
                  </div>

                  {/* Email Section */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger small" />
                  </div>

                  {/* Phone Number Section */}
                  <div className="mb-3">
                    <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                    <Field
                      id="phonenumber"
                      name="phonenumber"
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage name="phonenumber" component="div" className="text-danger small" />
                  </div>

                  {/* Date of Birth Section */}
                  <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                    <Field
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      className="form-control"
                    />
                    <ErrorMessage name="dateOfBirth" component="div" className="text-danger small" />
                  </div>

                  {/* Gender Section */}
                  <div className="mb-3">
                    <label className="form-label">Gender</label><br />
                    <div className="form-check form-check-inline">
                      <Field type="radio" name="gender" value="Male" className="form-check-input" />
                      <label className="form-check-label">Male</label>
                    </div><br />
                    <div className="form-check form-check-inline">
                      <Field type="radio" name="gender" value="Female" className="form-check-input" />
                      <label className="form-check-label">Female</label>
                    </div><br />
                    <div className="form-check form-check-inline">
                      <Field type="radio" name="gender" value="Other" className="form-check-input" />
                      <label className="form-check-label">Other</label>
                    </div>
                    <ErrorMessage name="gender" component="div" className="text-danger small" />
                  </div>

                  {/* Password Section */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                    <ErrorMessage name="password" component="div" className="text-danger small" />
                  </div>

                  {/* Confirm Password Section */}
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger small" />
                  </div>

                  {/* Address Section */}
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <Field
                      id="address"
                      name="address"
                      type="text"
                      className="form-control"
                      placeholder="Enter your address"
                    />
                    <ErrorMessage name="address" component="div" className="text-danger small" />
                  </div>

                  {/* Country Section */}
                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <Field as="select" name="country" className="form-select">
                      <option value="">Select a country</option>
                      <option value="Canada">Canada</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                    </Field>
                    <ErrorMessage name="country" component="div" className="text-danger small" />
                  </div>

                  {/* Profile Picture Section */}
                  <div className="mb-3">
                    <label htmlFor="profilePicture" className="form-label">Profile Picture (Optional)</label>
                    <input
                      type="file"
                      id="profilePicture"
                      name="profilePicture"
                      onChange={(event) => setFieldValue('profilePicture', event.currentTarget.files[0])}
                      className="form-control"
                    />
                  </div>

                  {/* Terms and Conditions Section */}
                  <div className="mb-3 form-check">
                    <Field type="checkbox" name="termsAccepted" className="form-check-input" />
                    <label htmlFor="termsAccepted" className="form-check-label">
                      I accept the terms and conditions
                    </label>
                    <ErrorMessage name="termsAccepted" component="div" className="text-danger small" />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

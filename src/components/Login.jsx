import React,{ useState, useEffect }  from "react";
import "./login.scss";
import login from "../img/login.png";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const initialValues = { name: "", email: "", password: "", cpassword:"", phone:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
    // eslint-disable-next-line
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword){
      errors.cpassword = "Password is required!"
    } else if(values.cpassword !== values.password){
      errors.cpassword = "Password do not match!"
    }
    if (!values.phone){
      errors.phone= "Phone number is required!"
    }else if(values.number.length !== 10){
      errors.phone = "Phone number cannot exceed more than 10 characters";
    }
    return errors;
  };

  const navToHome= useNavigate();



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // if(Login){
    //   dispatch(login(formValues, navigate));
    // }else{
    //   console.error(Login);
    // }
  };

  return (
    <div className="login">
      <div className="login-left">
        <img className="login__img" src={login} alt="" />
        <div className="login__mix">
          <h2 className="login__head">Choose a date range</h2>
          <p className="login__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam
            placeat.
          </p>
        </div>
      </div>

      <form className="login-right" onSubmit={handleSubmit}>
        <h2 className="login__title">Create an account</h2>
        <div className="login__same">
          <label className="label" htmlFor="email">
            Your email address
          </label>
          <input
            className="input"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p className="login__error">{formErrors.email}</p>
        <div className="login__same">
          <label className="label" htmlFor="password">
            Your password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="current_password"
          />
        </div>
        <p className="login__error">{formErrors.password}</p>
        <div className="login__same">
          <label className="label" htmlFor="cpassword">
            Confirm your password
          </label>
          <input
            className="input"
            type="password"
            name="cpassword"
            value={formValues.cpassword}
            onChange={handleChange}
            autoComplete="current_password"

          />
        </div>
        <p className="login__error">{formErrors.cpassword}</p>
        <div className="login__same">
          <label className="label" htmlFor="name">
            Your full name
          </label>
          <input
            className="input"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <p className="login__error">{formErrors.name}</p>
        <div className="login__same">
          <label className="label" htmlFor="phoneno">
            Your phone number
          </label>
          <input
            className="phone"
            type="number"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <p className="login__error">{formErrors.phone}</p>
        <div className="login__terms">
          <input type="checkbox" checked/>
          <label htmlFor="terms"><b>I read and agree Terms and Conditions
            </b></label>
        </div>
        <button  onClick={()=>{isSubmit && navToHome('/home')}} className="login__btn" 
        >Create Account</button>
      </form>
    </div>
  );
};

export default Login;

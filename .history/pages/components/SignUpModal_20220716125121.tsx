import { useState } from "react";
export default function SignInModal() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //console.log(formValues);
  };
  return (
    <div className="formcontainer">
      <form>
        <h1>Sign Up</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>UserName</label>
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label>Email</label>
            <input type="text" placeholder="Email" name="email" />
            onChange={(e) => handleChange(e)}
          </div>
          <div className="formField">
            <label>Password</label>
            <input type="text" placeholder="Password" name="password" />
            onChange={(e) => handleChange(e)}
          </div>
          <button className="SubmitButton">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

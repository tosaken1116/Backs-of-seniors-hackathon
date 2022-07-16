import { useState } from "react";
export default function SignInModal() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    console.log(e.target.value);
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
          </div>
          <div className="formField">
            <label>Password</label>
            <input type="text" placeholder="Password" name="password" />
          </div>
          <button className="SubmitButton">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

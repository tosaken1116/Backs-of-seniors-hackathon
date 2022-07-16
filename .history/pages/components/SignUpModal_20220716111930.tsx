import React from "react";
import { setEnvironmentData } from "worker_threads";

export default function SignInModal() {
    const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement) => {
        const value = event.target.value;
        setEnvironmentData({...data, userName: value});
    }
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement) => {
        const value = event.target.value;
        setEnvironmentData({...data, email: value});
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement) => {
        const value = event.target.value;
        setEnvironmentData({...data, Password: value});
    }
  return (
    <div className="formcontainer">
      <form>
        <h1>Sign Up</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>UserName</label>
            <input type="text" placeholder="UserName" name="username" />
          </div>
          <div className="formField">
            <label>Email</label>
            <input type="text" placeholder="Email" name="mail" />
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

export default function SignInModal() {
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
            <input type="text" placeholder="Mail" name="mail" />
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

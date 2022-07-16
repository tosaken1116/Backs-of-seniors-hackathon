export default function SignInModal() {
  return (
    <div classname="formcontainer">
      <form>
        <h1>Sign In</h1>
        <div className="uiform">
          <div className="formField">
            <label>Email</label>
            <input type="text" placeholder="Email" name="mail" />
          </div>
          <div className="formField">
            <label>Password</label>
            <input type="text" placeholder="Password" name="password" />
          </div>
        </div>
      </form>
    </div>
  );
}

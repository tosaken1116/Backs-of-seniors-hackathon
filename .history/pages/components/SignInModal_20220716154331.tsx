export default function SignInModal() {
    return (
        <div className="formcontainer">
            <form>
                <h1>Sign In</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            required
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className="formField">
                        <label>Password</label>
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            required
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <button className="SubmitButton">Sign In</button>
                </div>
            </form>
        </div>
    );
}

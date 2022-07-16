import { useState } from "react";
export default function SignInModal() {
    type loginElement = {
        username: string;
        email: string;
        password: string;
    };
    let initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState<loginElement>(initialValues);
    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
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
                    <div className="formField bg">
                        <label>Password</label>
                        <input
                            type="password"
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

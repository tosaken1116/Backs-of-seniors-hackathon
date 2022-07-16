import { useState } from "react";
export default function SignInModal() {
    type loginElement = {
        username: string;
        email: string;
        password: string;
    };
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState<loginElement>(initialValues);
    const [formErrors, setFormErrors] = useState<loginElement>(initialValues);

    const handleChange = (event) => {
        // console.log(event.target.value);
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
        /        / / ログイン情報の送信;
        //バリデーションチェック
        setFormErrors(validate(formValues));
        console.log(formErrors);
    };

    const validate = (values) => {
        const errors: loginElement = initialValues;
        if (!values.username) {
            errors.username = "ユーザー名を入力してください";
        }
        if (!values.email) {
            errors.email = "メールアドレスを入力してください";
        }
        if (!values.password) {
            errors.password = "パスワードを入力してください";
        } else if (values.password.length < 4) {
            errors.password =
                "4文字以上15文字以下のパスワードを入力してください";
        } else if (values.password.length > 15) {
            errors.password =
                "4文字以上15文字以下のパスワードを入力してください";
        }
        console.log(errors);
        return errors;
    };

    return (
        <div className="formcontainer">
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Sign Up</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>ユーザー名</label>
                        <input
                            type="text"
                            placeholder="UserName"
                            name="username"
                            onChange={(event) => handleChange(event)}
                        />
                        {formErrors.username !== "" && (
                            <div>{formErrors.username}</div>
                        )}
                    </div>
                    <div className="formField">
                        <label>メールアドレス</label>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={(event) => handleChange(event)}
                        />
                        {formErrors.email !== "" && (
                            <div>{formErrors.email}</div>
                        )}
                    </div>
                    <div className="formField">
                        <label>パスワード</label>
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    {formErrors.password != "" && (
                        <div>{formErrors.password != ""}</div>
                    )}
                    <button className="SubmitButton" type="submit">
                        サインアップ
                    </button>
                </div>
            </form>
        </div>
    );
}

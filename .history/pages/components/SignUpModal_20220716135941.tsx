import { useState } from "react";
export default function SignInModal() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //ログイン情報の送信
        //バリデーションチェック
        setFormErrors(validate(formValues));
    };

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "ユーザー名を入力してください";
        }
        if (!values.email) {
            errors.email = "メールアドレスを入力してください";
        }
        if (!values.password) {
            errors.password = "パスワードを入力してください";
        } else if(values.password length <4) {
            errors.password = "4文字以上15文字以下のパスワードを入力してください";
        }else if(values.password length > 15) {
            errors.password = "4文字以上15文字以下のパスワードを入力してください";
    };

    return (
        <div className="formcontainer">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign Up</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>ユーザー名</label>
                        <input
                            type="text"
                            placeholder="UserName"
                            name="username"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="formField">
                        <label>メールアドレス</label>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="formField">
                        <label>パスワード</label>
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <button className="SubmitButton">サインアップ</button>
                </div>
            </form>
        </div>
    );
}

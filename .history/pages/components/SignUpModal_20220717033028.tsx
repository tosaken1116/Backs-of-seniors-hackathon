import { useState } from "react";
export default function SignInModal() {
    type loginElement = {
        username: string;
        email: string;
        password: string;
    };
    type register = {
        registeredemail: string;
        registeredpassword: string;
    };

    let initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState<loginElement>(initialValues);
    const [formErrors, setFormErrors] = useState<loginElement>(initialValues);
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //ログイン情報の送信
        //バリデーションチェック
        {
            /*setFormErrors(validate(formValues));
        console.log(formErrors);*/
        }
        // setIsSubmit(true);
    };

    /*const validate = (values) => {
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
        // console.log(errors);
        return errors;
    };
    };*/

    return (
        <div className="flex">
            <div className ="flex-none w-14 h-14">
                username
            </div>
        </div>
        </div>
        <div className="formcontainer">
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Sign Up</h1>
                <hr />
                <div className="uiForm">
                    <div className="formField">
                        <label>ユーザー名</label>
                        <input
                            type="text"
                            placeholder="ユーザー名を入力してください"
                            name="username"
                            required
                            onChange={(event) => handleChange(event)}
                        />
                        {/* <div>{formErrors.username}</div> */}
                    </div>
                    {/* <p className="errormsg">{formErrors.username}</p> */}
                    <div className="formField">
                        <label>メールアドレス</label>
                        <input
                            type="text"
                            placeholder="メールアドレスを入力してください"
                            name="email"
                            required
                            onChange={(event) => handleChange(event)}
                        />
                        {/* <div>{formErrors.email}</div> */}
                    </div>
                    {/* <p className="errormsg">{formErrors.email}</p> */}
                    <div className="formField">
                        <label>パスワード</label>
                        <input
                            type="password"
                            placeholder="パスワードを入力してください"
                            name="password"
                            required
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    {/* <div>{formErrors.password}</div> */}
                    {/* <p className="errormsg">{formErrors.password}</p> */}
                    <button
                        className="rounded-none... SubmitButton"
                        type="submit"
                    >
                        サインアップ
                    </button>
                    {/* {Object.keys isSubmit && ( <div>サインアップ完了</div>)}*/}
                </div>
            </form>
        </div>
    );
}

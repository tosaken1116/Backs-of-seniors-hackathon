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
        <p className="text-center">
            <div>
                <div className="mt-32">
                    {/* <div className="bg-rose-400"></div> */}
                    <div>
                        <div className="flex-initial bg-rose-300 ">
                            <div>Sign Up</div>
                        </div>
                        <div className="formcontainer">
                            <form onSubmit={(event) => handleSubmit(event)}>
                                <hr />
                                <div className="uiForm">
                                    <div className="formField">
                                        <label>ユーザー名</label>
                                        <br></br>
                                        <input
                                            className="text-center border-solid border-2 border-sky-500"
                                            type="text"
                                            placeholder="ユーザー名"
                                            name="username"
                                            required
                                            onChange={(event) =>
                                                handleChange(event)
                                            }
                                        />
                                        {/* <div>{formErrors.username}</div> */}
                                    </div>
                                    {/* <p className="errormsg">{formErrors.username}</p> */}
                                    <div className="formField ">
                                        <label>メールアドレス</label>
                                        <br></br>
                                        <input
                                            className="text-center"
                                            type="text"
                                            placeholder="メールアドレス"
                                            name="email"
                                            required
                                            onChange={(event) =>
                                                handleChange(event)
                                            }
                                        />
                                        {/* <div>{formErrors.email}</div> */}
                                    </div>
                                    {/* <p className="errormsg">{formErrors.email}</p> */}
                                    <div className="formField ">
                                        <label>パスワード</label>
                                        <br></br>
                                        <input
                                            className="text-center"
                                            type="password"
                                            placeholder="パスワード"
                                            name="password"
                                            required
                                            onChange={(event) =>
                                                handleChange(event)
                                            }
                                        />
                                    </div>
                                    {/* <div>{formErrors.password}</div> */}
                                    {/* <p className="errormsg">{formErrors.password}</p> */}
                                    <div className="m-3">
                                        <button className="px-2 py-1 bg-green-400 text-xl text-white font-semibold rounded hover:bg-green-500">
                                            Sign Up!
                                        </button>
                                    </div>
                                    {/* {Object.keys isSubmit && ( <div>サインアップ完了</div>)}*/}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </p>
    );
}

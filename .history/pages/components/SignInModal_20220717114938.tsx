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
        <p className="text-center ">
            <div>
                <div className="mt-32">
                    <div>
                        <div className="flex-initial bg-rose-300">
                            <div>Sign In</div>
                        </div>
                        <div className="formcontainer">
                            <form>
                                <hr />
                                <div className="uiForm">
                                    <div className="formField">
                                        <label>メールアドレス</label>
                                        <input
                                            type="text"
                                            placeholder="メールアドレスを入力してください"
                                            name="email"
                                            required
                                            onChange={(event) =>
                                                handleChange(event)
                                            }
                                        />
                                    </div>
                                    <div className="formField bg">
                                        <label>パスワード</label>
                                        <input
                                            type="password"
                                            placeholder="パスワードを入力してください"
                                            name="password"
                                            required
                                            onChange={(event) =>
                                                handleChange(event)
                                            }
                                        />
                                    </div>
                                    <div className="m-3">
                                        <button className="px-2 py-1 bg-green-400 text-xl text-white font-semibold rounded hover:bg-green-500">
                                            Sign Up!
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </p>
    );
}

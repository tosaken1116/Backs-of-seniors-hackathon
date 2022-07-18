import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignInModal() {
    type loginElement = {
        username: string;
        email: string;
        password: string;
    };
    const BaseURL = "";
    const router = useRouter();

    let initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState<loginElement>(initialValues);
    const signIn = async () => {
        await axios
            .post<[]>(BaseURL + "sighin", {
                email: formValues.email,
                password: formValues.password,
            })
            .then((res: AxiosResponse) => {
                console.log(res.data);
                router.replace("/inputCalorie");
            })
            .catch((error) => {
                console.log(error);
                router.replace("/inputCalorie");
            });
    };
    const handleChange = async (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        await setFormValues({ ...formValues, [name]: value });
    };
    const changePath = () => {
        router.push("/inputCalorie");
    };
    return (
        <div className="text-center ">
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
                                        <br></br>
                                        <input
                                            className="text-center border-solid border-2 border-sky-300"
                                            type="text"
                                            placeholder="メールアドレス"
                                            name="email"
                                            required
                                            onChange={(event) =>
                                                handleChange(event)
                                            }
                                        />
                                    </div>
                                    <div className="formField">
                                        <label>パスワード</label>
                                        <br></br>
                                        <input
                                            className="text-center border-solid border-2 border-sky-300"
                                            type="password"
                                            placeholder="パスワード"
                                            name="password"
                                            required
                                            onChange={(event) =>
                                                handleChange(event)
                                            }
                                        />
                                    </div>
                                    <div className="m-3">
                                        <button
                                            onClick={() => changePath}
                                            className="px-2 py-1 bg-green-400 text-xl text-white font-semibold rounded hover:bg-green-500"
                                        >
                                            Sign Up!
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

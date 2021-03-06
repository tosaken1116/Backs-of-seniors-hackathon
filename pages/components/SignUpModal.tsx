import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUpModal() {
    type loginElement = {
        username: string;
        email: string;
        password: string;
    };
    type register = {
        registeredemail: string;
        registeredpassword: string;
    };
    const router = useRouter();

    let initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState<loginElement>(initialValues);
    // const [formErrors, setFormErrors] = useState<loginElement>(initialValues);
    // const [isSubmit, setIsSubmit] = useState(false);
    const BaseURL = "";
    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios
            .post<[]>(BaseURL + "signup", {
                name: formValues.username,
                email: formValues.email,
                password: formValues.password,
            })
            .then((res) => {
                console.log(res.data);
                axios
                    .post<[]>(BaseURL + "sighin", {
                        email: formValues.email,
                        password: formValues.password,
                    })
                    .then((res: AxiosResponse) => {
                        console.log(res.data);
                        router.push("/inputCalorie");
                    })
                    .catch((error) => {
                        console.log(error);
                        router.push("/inputCalorie");
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const changePath = () => {
        router.push("/inputCalorie");
    };
    return (
        <div className="text-center">
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
                                        <label>???????????????</label>
                                        <br></br>
                                        <input
                                            className="text-center border-solid border-2 border-sky-300"
                                            type="text"
                                            placeholder="???????????????"
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
                                        <label>?????????????????????</label>
                                        <br></br>
                                        <input
                                            className="text-center border-solid border-2 border-sky-300"
                                            type="text"
                                            placeholder="?????????????????????"
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
                                        <label>???????????????</label>
                                        <br></br>
                                        <input
                                            className="text-center border-solid border-2 border-sky-300"
                                            type="password"
                                            placeholder="???????????????"
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
                                        <button
                                            onClick={() => changePath()}
                                            className="px-2 py-1 bg-green-400 text-xl text-white font-semibold rounded hover:bg-green-500"
                                        >
                                            Sign Up!
                                        </button>
                                    </div>
                                    {/* {Object.keys isSubmit && ( <div>????????????????????????</div>)}*/}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
//???????????????????????????
//?????????????????????????????????
{
    /*setFormErrors(validate(formValues));
        console.log(formErrors);*/
}
// setIsSubmit(true);

/*const validate = (values) => {
        const errors: loginElement = initialValues;
        if (!values.username) {
            errors.username = "??????????????????????????????????????????";
        }
        if (!values.email) {
            errors.email = "????????????????????????????????????????????????";
        }
        if (!values.password) {
            errors.password = "??????????????????????????????????????????";
        } else if (values.password.length < 4) {
            errors.password =
                "4????????????15?????????????????????????????????????????????????????????";
        } else if (values.password.length > 15) {
            errors.password =
                "4????????????15?????????????????????????????????????????????????????????";
        }
        // console.log(errors);
        return errors;
    };
    };*/

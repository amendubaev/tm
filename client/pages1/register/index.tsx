import React, { SyntheticEvent, useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import styles from "../../styles/common/auth.module.scss";
import formStyles from "../../styles/common/form.module.scss";
import btnStyles from "../../styles/common/button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            email,
            password,
            'firstName': '123',
            'lastName': '321',
        };
        axios.post(`/api/auth/signup`, data)
        .then(function (response) {
            setCookie(null, "token", response?.data?.token, {
                path: "/",
            });
            router.push("/");
        })
        .catch(function (error) {
            toast.error(error.response?.data?.message);
        });

        await router.push("/");
    };

    return (
        <AuthLayout>
            <div className={styles.authBox}>
                <h1>Hey, 👋</h1>
                <p>Enter your credentials to signup</p>
                <form
                    className={`${formStyles.form} ${styles.authForm}`}
                    onSubmit={onSubmitHandler}
                >
                    <div className={formStyles.form_fields}>
                        {/* <div className={formStyles.form_field}>
                            <label
                                htmlFor="first_name"
                                className={formStyles.form_field_label}
                            >
                                First Name
                            </label>
                            <input
                                className={formStyles.form_field_input}
                                type="text"
                                name="first_name"
                                id="first_name"
                                required
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div> */}
                        <div className={formStyles.form_field}>
                            <label
                                htmlFor="email"
                                className={formStyles.form_field_label}
                            >
                                Email
                            </label>
                            <input
                                className={formStyles.form_field_input}
                                type="email"
                                name="email"
                                id="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={formStyles.form_field}>
                            <label
                                htmlFor="password"
                                className={formStyles.form_field_label}
                            >
                                Password
                            </label>
                            <input
                                className={formStyles.form_field_input}
                                type="password"
                                name="password"
                                id="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            className={`${formStyles.form_field_submit} ${btnStyles.btn} ${btnStyles.btn_primary}`}
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                    <Link href="/login">Log In</Link>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Register;
